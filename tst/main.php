<?php
	$fp = file_get_contents("./data/event_details.json");
	$data = json_decode($fp);
	$data = (array)$data;
	array_push($data, $_POST);
	$data = json_encode($data, JSON_PRETTY_PRINT);
	if(file_put_contents("./data/event_details.json", $data))
		echo "True";
	else
		echo "False";
?>
