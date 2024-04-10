<?php
$myObject->name = "John Doe";
$myObject->age = 34;
$myObject->city = "New York";

$myJSON = json_encode($myObject);

echo $myJSON;
?>