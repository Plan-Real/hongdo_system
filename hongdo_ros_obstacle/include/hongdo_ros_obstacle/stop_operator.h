#include <ros/ros.h>
#include <yaml-cpp/yaml.h>
#include <iostream>
#include <std_msgs/Bool.h>
#include <hongdo_ros_obstacle/Fin.h>

class StopOperator
{
 private:
  // ROS NodeHandle
  ros::NodeHandle nh;
  // ROS Parameters

  // ROS Topic Publisher
  ros::Publisher stop_pub;

  // ROS Topic Subscriber
  ros::Subscriber Fin_sub;

  // ROS Service Server
  // ros::ServiceServer move_command_server_;
  
  // ROS Clinet Server
  // ros::ServiceClient stop_commmand_client_;


  std_msgs::Bool stop_;
  int64_t cluster_num;
  // bool is_loop_, cluster;

 public:
  StopOperator();
  ~StopOperator();

  // bool isLoop(void){ return is_loop_;}
  void FinCallback(const hongdo_ros_obstacle::Fin::ConstPtr& Fin_msgs);
};
