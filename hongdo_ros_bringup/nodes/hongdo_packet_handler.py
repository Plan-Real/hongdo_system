import serial
import rospy
import io
from time import sleep

class ReadLine:
   def __init__(self, s):
      self.buf = bytearray()
      self.s = s

   def readline(self):
      i = self.buf.find(b"\n")
      if i >= 0:
         r = self.buf[:i+1]
         self.buf = self.buf[i+1:]
         return r
      while True:
         i = max(1, min(2048, self.s.in_waiting))
         data = self.s.read(i)
         i = data.find(b"\n")
         if i >= 0:
            r = self.buf + data[:i+1]
            self.buf[0:] = data[i+1:]
            return r
         else:
            self.buf.extend(data)

class PacketHandler2:
    def __init__(self):
        port_name = rospy.get_param('~port', '/dev/ttyMotor')
        baud_rate = rospy.get_param('~baud', 115200)
        self._ser = serial.Serial(port_name, baud_rate)
        self._ser_io = io.TextIOWrapper(io.BufferedRWPair(self._ser, self._ser, 1), 
            newline = '\r', line_buffering = True)
        self._rl = ReadLine(self._ser)
        self.write_periodic_query_enable(0)
        self._ser.flushInput()
        self._ser.reset_input_buffer()
        self._ser.reset_output_buffer()
        self.incomming_info = ['ODO', 'VW', 'POSE', 'ACCL', 'GYRO']
        self._vel = [0.0, 0.0]
        self._enc = [0.0, 0.0]
        self._wodom = [0.0, 0.0]
        self._rpm = [0.0, 0.0]
        self._wvel = [0.0, 0.0]
        self._gyro = [0.0, 0.0, 0.0]
        self._imu = [0.0, 0.0, 0.0]
        rospy.loginfo('Serial port: %s', port_name)
        rospy.loginfo('Serial baud rate: %s', baud_rate)

    def set_periodic_info(self, param1):
        for idx, each in enumerate(self.incomming_info):
            #print("$cREGI," + str(idx) + "," + each)
            self.write_port("$cREGI," + str(idx) + "," + each)

        self.write_port("$cPERI," + str(param1))
        sleep(0.01)
        self.write_periodic_query_enable(1)

    def get_port_state(self):
        return self._ser.isOpen()
        
    def read_port(self):
        return self._rl.readline()
    def close_port(self):
        print("Port close")
        self._ser.close()

    def read_packet(self):
        if self.get_port_state() == True:
            whole_packet = self.read_port()
            if whole_packet:
                packet = whole_packet.split(b',')
                try:
                    header = packet[0].split(b'#')[1]
                    if header.startswith(b'VW'):
                        self._vel = [int(packet[1]), int(packet[2])]
                    elif header.startswith(b'ENCOD'):
                        self._enc = [int(packet[1]), int(packet[2])]
                    elif header.startswith(b'ODO'):
                        self._wodom = [int(packet[1]), int(packet[2])]
                    elif header.startswith(b'RPM'):
                        self._rpm = [int(packet[1]), int(packet[2])]
                    elif header.startswith(b'DIFFV'):
                        self._wvel = [int(packet[1]), int(packet[2])]
                    elif header.startswith(b'GYRO'):
                        self._gyro = [float(packet[1]), float(packet[2]), float(packet[3])]
                    elif header.startswith(b'POSE'):
                        self._imu = [float(packet[1]), float(packet[2]), float(packet[3])]
                except:
                    pass

    def get_base_velocity(self):
        return self._vel
   
    def get_wheel_encoder(self):
        return self._enc

    def get_wheel_odom(self):
        return self._wodom

    def get_wheel_rpm(self):
        return self._rpm
   
    def get_wheel_velocity(self):
        return self._wvel

    def write_periodic_query_enable(self, param):
        self.write_port("$cPEEN," + str(param))
        #SPEEN : Periodic Query 를 활성화 / 비활성화 합니다.
        #param : 0->disable, 1->Enable
        sleep(0.05)

    def write_odometry_reset(self):
        self.write_port("$cODO,0")
        #SODO : SODO Odometer 의 값을 초기화 합니다. Encoder 값은 유지됩니다.
        sleep(0.05)

    def write_base_velocity(self, lin_vel, ang_vel):
        # lin_vel : mm/s, ang_vel : mrad/s
        self.write_port('$CVW,{:.0f},{:.0f}'.format(lin_vel, ang_vel))
         #CDIFFV 로봇의 목표 좌, 우 바퀴 속도를 설정합니다.
            #범위 : -1200 ~ +1200
            #MAX) MAXVW 에서 설정 가능
         #param1 : 좌측 바퀴 목표 속도
         #param2 : 우측 바퀴 목표 속도

    def write_wheel_velocity(self, wheel_l_lin_vel, wheel_r_lin_vel):
        self.write_port('$CDIFFV,{:.0f},{:.0f}'.format(wheel_l_lin_vel, wheel_r_lin_vel))
        #CVW : 로봇의 속도, 각속도 설정 / 범위 : -MAX ~ +MAX / MAX ) MAXVW 에서 설정 가능
        #lin_vel : 목표 속도
        #ang_vel : 목표 각속도

    def write_port(self, buffer):
        if self.get_port_state() == True:
            a = bytes(buffer + "\r\n", 'utf-8')
            self._ser.write(a)