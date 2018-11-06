
var compX = 0;
var user=" ";
var cpick=" ";
var msg=" ";
var WIN="You Win";

function doit(x)
{
	document.bgColor="#ffffff";

	rand = Math.random();
	if (rand < 0.33)
	{	compX = 0; cpick="Comp chose ROCK"; }
	else if ((rand >= 0.33) && (rand <= 0.66))
	{	compX = 1; cpick="Comp chose PAPER"; }
	else if (rand > 0.66)
	{	compX = 2; cpick="Comp chose SCISSORS"; }

	if (x==0)
	{
		user="User chose ROCK";
		if (compX==0) { msg="We Tie"; }
		else if (compX==1) { msg="You Lose"; }
		else if (compX==2) { msg=WIN; }
	}
	if (x==1)
	{
		user="User chose PAPER";
		if (compX==0) { msg=WIN; }
		else if (compX==1) { msg="We Tie"; }
		else if (compX==2) { msg="You Lose"; }
	}
	if (x==2)
	{
		user="User chose SCISSORS"
		if (compX==0) { msg="You Lose"; }
		else if (compX==1) { msg=WIN; }
		else if (compX==2) { msg="We Tie"; }
	}

	document.rps.user.value=user;
	document.rps.comp.value=cpick;

}

