<!DOCTYPE html>
<html>
<body>

<h1>Lab5</h1>

<?php
print "Task1";
?>

<p> 
	1) 7 + 3 * 6 / 2 - 1 = 
<?=7 + 3 * 6 / 2 - 1;
?>
<br/>
	2) (3 * 9 * ( 3 + ( 4 * 5 / 3 ) ) ) =
<?=(3 * 9 * (3 + (4 * 5 / 3)))
?>

<br/>
	3) 12.0 + 2 / 5 * 10.0 =
<?=12.0 + 2 / 5 * 10.0
?>

<br/>
	4) 2 / 5 + 10.0 * 3 - 2.5 = 
<?=2 / 5 + 10.0 * 3 - 2.5
?>

</p>

<?php
print "Task2";
?>
<p>
	F = 451
	C = (5/9)(451 - 32) = 
	<?
$F = 451;
print (5 / 9) * ($F - 32);
?>

</p>

<?php
print "Task3";
?>
<p>
	radius = 5
	<br/>
	diameter = <?=5 * 2 ?>
	<br/>
	circumference = <?=2 * 3.14159 * 5 ?>
	<br/>
	area = <?=3.14159 * 5 * 5 ?>
</p>

<?php
print "Task4";
?>
<p>
	p1 = (3, 4)
	<br/>
	p2 = (0 ,0)
	<br/>
	d = <span>&#8730;</span> (x2 - x1)<sup>2</sup> + (y2 - y1)<sup>2</sup> = <?=((4 - 0) * (4 - 0) + (3 - 0) * (3 - 0)) **(0.5) ?>
	<br>
</p>

<?php
print "Task5";
$input = 5049;
$h = (int)($input / 3600);
$m = (int)(($input % 3600) / 60);
$s = (int)($input % 60);
?>

<p>
	Input = 5049 seconds
	<br/>
	
	<p>H: <?=$h ?> M: <?=$m ?> S: <?=$s ?> </p> 
</p>

<?php
print "Task6";
$have = 100;
$price = 70;
$input = $have - $price;
$fifty = (int)($input / 50);
$input = (int)($input % 50);

$twenty = (int)($input / 20);
$input = (int)($input % 20);

$ten = (int)($input / 10);
$input = (int)($input % 10);

$five = (int)($input / 5);
$input = (int)($input % 5);

$two = (int)($input / 2);
$input = (int)($input % 2);

$one = (int)($input);
// $input = (int)($input % 1);

?>

<p>
	<p>Input = 100</p>
	<p>price = 70</p>
	<p>Number of 50 cent coins : <?=$fifty ?></p>
	<p>Number of 20 cent coins : <?=$twenty ?></p> 
	<p>Number of 10 cent coins : <?=$ten ?></p> 
	<p>Number of 5 cent coins : <?=$five ?></p> 
	<p>Number of 2 cent coins : <?=$two ?></p>
	<p>Number of 1 cent coins : <?=$one ?></p> 



</p>



</body>
</html>
