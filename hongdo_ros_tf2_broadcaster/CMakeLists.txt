cmake_minimum_required(VERSION 3.0.2)
project(hongdo_ros_tf2_broadcaster)
## Find dependencies
find_package(catkin REQUIRED COMPONENTS
  geometry_msgs
  roscpp
  rospy
  std_msgs
  tf2
  tf2_ros
  tf2_geometry_msgs
  nav_msgs
)

###################################
## catkin specific configuration ##
###################################
catkin_package(
#  INCLUDE_DIRS include
#  LIBRARIES turtle_tf2
 CATKIN_DEPENDS geometry_msgs roscpp rospy std_msgs tf2 tf2_ros nav_msgs
#  DEPENDS system_lib
)

###########
## Build ##
###########

include_directories(
  ${catkin_INCLUDE_DIRS}
)

## C++ examples
add_executable(hongdo_ros_tf2_broadcaster src/hongdo_ros_tf2_broadcaster.cpp)
target_link_libraries(hongdo_ros_tf2_broadcaster ${catkin_LIBRARIES})
if(catkin_EXPORTED_TARGETS)
  add_dependencies(hongdo_ros_tf2_broadcaster ${catkin_EXPORTED_TARGETS})
endif()


## Install Python Examples


## Install C++ Examples
install(TARGETS hongdo_ros_tf2_broadcaster 
  ARCHIVE DESTINATION ${CATKIN_PACKAGE_LIB_DESTINATION}
  LIBRARY DESTINATION ${CATKIN_PACKAGE_LIB_DESTINATION}
  RUNTIME DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

## Install Other Resources
install(DIRECTORY launch
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION})

install(DIRECTORY rviz
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION})
