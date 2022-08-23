#include <ros/ros.h>
<<<<<<< HEAD
#include <tf2/LinearMath/Quaternion.h>
#include <tf2_ros/transform_broadcaster.h>
#include <geometry_msgs/TransformStamped.h>
#include <nav_msgs/Odometry.h>




void poseCallback(const nav_msgs::Odometry& msg){
  static tf2_ros::TransformBroadcaster br;
	geometry_msgs::TransformStamped transformStamped;
  
	transformStamped.header.stamp = ros::Time::now();
	transformStamped.header.frame_id = "world";
	transformStamped.child_frame_id = "base_footprint";
	transformStamped.transform.translation.x = msg.pose.pose.position.x;
	transformStamped.transform.translation.y = msg.pose.pose.position.y;
	transformStamped.transform.translation.z = msg.pose.pose.position.z;
	// tf2::Quaternion q;
  //       q.setRPY(0, 0, msg.pose.pose.orientation);
	transformStamped.transform.rotation.x = msg.pose.pose.orientation.x;
	transformStamped.transform.rotation.y = msg.pose.pose.orientation.y;
	transformStamped.transform.rotation.z = msg.pose.pose.orientation.z;
	transformStamped.transform.rotation.w = msg.pose.pose.orientation.w;

	br.sendTransform(transformStamped);
}

int main(int argc, char** argv){
  ros::init(argc, argv, "my_tf2_broadcaster");

  ros::NodeHandle private_node("~");
  // if (! private_node.hasParam("turtle"))
  // {
  //   if (argc != 2){ROS_ERROR("need turtle name as argument"); return -1;};
  //   turtle_name = argv[1];
  // }
  // else
  // {
  //   private_node.getParam("turtle", turtle_name);
  // }
    
  ros::NodeHandle node;
  ros::Subscriber sub = node.subscribe("/odom", 10, &poseCallback);

  ros::spin();
  return 0;
};
=======
#include <tf2_ros/static_transform_broadcaster.h>
#include <geometry_msgs/TransformStamped.h>
#include <cstdio>
#include <tf2/LinearMath/Quaternion.h>


std::string static_turtle_name;

int main(int argc, char **argv)
{
  ros::init(argc,argv, "my_static_tf2_broadcaster");
  if(argc != 7)
  {
    ROS_ERROR("Invalid number of parameters\nusage: static_turtle_tf2_broadcaster child_frame_name x y z roll pitch yaw");
    return -1;
  }
  // if(strcmp(argv[1],"world")==0)
  // {
  //   ROS_ERROR("Your static turtle name cannot be 'world'");
  //   return -1;

  // }
  static_turtle_name = "odom";
  static tf2_ros::StaticTransformBroadcaster static_broadcaster;
  geometry_msgs::TransformStamped static_transformStamped;

  static_transformStamped.header.stamp = ros::Time::now();
  static_transformStamped.header.frame_id = "world";
  static_transformStamped.child_frame_id = static_turtle_name;
  static_transformStamped.transform.translation.x = atof(argv[1]);
  static_transformStamped.transform.translation.y = atof(argv[2]);
  static_transformStamped.transform.translation.z = atof(argv[3]);
  tf2::Quaternion quat;
  quat.setRPY(atof(argv[4]), atof(argv[5]), atof(argv[6]));
  static_transformStamped.transform.rotation.x = quat.x();
  static_transformStamped.transform.rotation.y = quat.y();
  static_transformStamped.transform.rotation.z = quat.z();
  static_transformStamped.transform.rotation.w = quat.w();
  static_broadcaster.sendTransform(static_transformStamped);
  ROS_INFO("Spinning until killed publishing %s to world", static_turtle_name.c_str());
  ros::spin();
  return 0;
};
>>>>>>> 5135bdfb25c07a5779846d96f1535c82939f3d82
