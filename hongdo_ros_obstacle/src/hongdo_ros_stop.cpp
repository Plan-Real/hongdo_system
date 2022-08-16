#include "hongdo_ros_obstacle/stop_operator.h"



StopOperator::StopOperator():
  nh("")
{
  stop_pub=nh.advertise<std_msgs::Bool>("stop",1);
  Fin_sub=nh.subscribe<hongdo_ros_obstacle::Fin>("fin_data",10,&StopOperator::FinCallback, this);
}

StopOperator::~StopOperator()
{
}
void StopOperator::FinCallback(const hongdo_ros_obstacle::Fin::ConstPtr& Fin_msgs)
{
  cluster_num = Fin_msgs->num;
  if(cluster_num > 1){
    stop_.data=true;
    stop_pub.publish(stop_);
    ROS_INFO("stop message : 1" );
  }
  else{
    stop_.data=false;
    stop_pub.publish(stop_);
    ROS_INFO("stop message : 0" );
  } 
}



int main(int argc, char** argv)
{
  ros::init(argc, argv, "hongdo_ros_stop");
  StopOperator stop_operator;

  ros::spin();
  return 0;
}
