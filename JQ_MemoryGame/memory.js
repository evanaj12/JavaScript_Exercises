/* jquery javascript memory game */

function set_grid(g){
	var contents=[];
	var nums=["0","1","2","3","4","5","6","7"];
	var lets=["A","B","C","D","E","F","G","H"];

	for(var i=0; i<8; i++){
		var num_let=Math.random();
		if (num_let>0.5){
			var chosen=nums;
		}else{
			var chosen=lets;
		}
		contents.push(chosen[i]);
	}
	contents2=contents;
	contents=contents.concat(contents2);

	function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
   	 return o;
	};

	g=shuffle(contents);

	$("#b00").attr("name",g[0]);
	$("#b01").attr("name",g[1]);
	$("#b02").attr("name",g[2]);
	$("#b03").attr("name",g[3]);
	$("#b10").attr("name",g[4]);
	$("#b11").attr("name",g[5]);
	$("#b12").attr("name",g[6]);
	$("#b13").attr("name",g[7]);
	$("#b20").attr("name",g[8]);
	$("#b21").attr("name",g[9]);
	$("#b22").attr("name",g[10]);
	$("#b23").attr("name",g[11]);
	$("#b30").attr("name",g[12]);
	$("#b31").attr("name",g[13]);
	$("#b32").attr("name",g[14]);
	$("#b33").attr("name",g[15]);
};

function set_click(ele){
	var ele_val=$(ele).attr("name");
	$(ele).val(ele_val);
	$(ele).attr("class", "true");
};

function check(){
	var clicked = $(".true");
	if (clicked.length>1){
		num_clicks++;
		$("input").prop("disabled", true);
		if (clicked[0].value===clicked[1].value){
			correct.push(clicked[0]);
			correct.push(clicked[1]);
			reset();
		}else{
			$("#dummy").fadeOut(3000, function(){
				$(".true").val("");
				$("#dummy").fadeIn();
				reset();
			});
		};
	};

	if (correct.length===16){
		alert("It took you "+num_clicks+" tries to win the game.");
	}
	$("#tries").text(num_clicks);
};

function reset(){
	$(".true").attr("class", "false");
	$("input").prop("disabled", false);
	if (correct.length>1){
		for(var i=0; i<correct.length; i++){
			correct[i].disabled=true;
		};
	};
};

	$("#b00").on("click",function(){
		set_click("#b00");
		check();
		});
	$("#b01").on("click",function(){
		set_click("#b01");
		check();
		});
	$("#b02").on("click",function(){
		set_click("#b02");
		check();
		});
	$("#b03").on("click",function(){
		set_click("#b03");
		check();
		});
	$("#b10").on("click",function(){
		set_click("#b10");
		check();
		});
	$("#b11").on("click",function(){
		set_click("#b11");
		check();
		});
	$("#b12").on("click",function(){
		set_click("#b12");
		check();
		});
	$("#b13").on("click",function(){
		set_click("#b13");
		check();
		});
	$("#b20").on("click",function(){
		set_click("#b20");
		check();
		});
	$("#b21").on("click",function(){
		set_click("#b21");
		check();
		});
	$("#b22").on("click",function(){
		set_click("#b22");
		check();
		});
	$("#b23").on("click",function(){
		set_click("#b23");
		check();
		});
	$("#b30").on("click",function(){
		set_click("#b30");
		check();
		});
	$("#b31").on("click",function(){
		set_click("#b31");
		check();
		});
	$("#b32").on("click",function(){
		set_click("#b32");
		check();
		});
	$("#b33").on("click",function(){
		set_click("#b33");
		check();
		});

var num_clicks=0;
var correct=[];
var grid=[];

set_grid(grid);

