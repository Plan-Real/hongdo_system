#include <ros/ros.h>
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
