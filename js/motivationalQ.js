    	$(document).ready(function(){

    		$("#button").click(function(){

    			var Qnumber = (Math.floor(Math.random() * 26) + 1);
    			
    			if( Qnumber == 1 ) {$("#message").text("If you have no confidence in self, you are twice defeated in the race of life. With confidence, you have won even before you have started. \"Marcus Garvey\"");}
    			else if( Qnumber == 2 ) {$("#message").text("He who who says he can and he who says he can’t are both usually right.\"Confucius\"");}	
    			else if( Qnumber == 3 ) {$("#message").text("If you can dream it, you can do it. \"Walt Disney\"");}	
    			else if( Qnumber == 4 ) {$("#message").text("Expect problems and eat them for breakfast. \"Alfred A. Montapert\"");}
    			else if( Qnumber == 5 ) {$("#message").text("We may encounter many defeats but we must not be defeated. \"Maya Angelou\"");}	
    			else if( Qnumber == 6 ) {$("#message").text("Perseverance is failing 19 times and succeeding the 20th. \"Julie Andrews\"");}	
    			else if( Qnumber == 7 ) {$("#message").text("The key is to keep company only with people who uplift you, whose presence calls forth your best. \"Epictetus\"");}	
    			else if( Qnumber == 8 ) {$("#message").text("Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it. \"Oprah Winfrey\"");}
    			else if( Qnumber == 9 ) {$("#message").text("Sucking at something is the first step to becoming sorta good at something. \"Jake the Dog\"");}	
    			else if( Qnumber == 10 ) {$("#message").text("If you've got a talent, protect it. \"Jim Carrey\"");}	
    			else if( Qnumber == 11 ) {$("#message").text("No matter how many goals you have achieved, you must set your sights on a higher one. \"Jessica Savitch\"");}	
    			else if( Qnumber == 12 ) {$("#message").text("I'm not thirsty for women, I'm hungry for my own self-improvement and success. \"Donovan Brown\"");}
    			else if( Qnumber == 13 ) {$("#message").text("Opportunity does not knock, it presents itself when you beat down the door. \"Kyle Chandler\"");}
    			else if( Qnumber == 14 ) {$("#message").text("I know not age, nor weariness nor defeat. \"Rose Kennedy\"");}
    			else if( Qnumber == 15 ) {$("#message").text("If you believe in your dreams, I will prove to you, that you can achieve your dreams just by working hard. \"Rock Lee\"");}
    			else if( Qnumber == 16 ) {$("#message").text("Forgive yourself for your faults and your mistakes and move on. \"Les Brown\"");}
    			else if( Qnumber == 17 ) {$("#message").text("If you fell down yesterday, stand up today. \"H. G. Wells\"");}
    			else if( Qnumber == 19 ) {$("#message").text("Great minds discuss ideas; average minds discuss events; small minds discuss people. \"Eleanor Roosevelt\"");}
    			else if( Qnumber == 20 ) {$("#message").text("When you fail you learn from the mistakes you made and it motivates you to work even harder. \"Natalie Gulbis\"");}
    			else if( Qnumber == 21 ) {$("#message").text("The more things you do, the more you can do. \"Lucille Ball\"");}
    			else if( Qnumber == 22 ) {$("#message").text("If you want to achieve greatness stop asking for permission. \"Unknown\"");}
    			else if( Qnumber == 23 ) {$("#message").text("If you are not willing to risk the usual you will have to settle for the ordinary. \"Jim Rohn\"");}
    			else if( Qnumber == 24 ) {$("#message").text("Just when the caterpillar thought the world was ending, he turned into a butterfly. \"Proverb\"");}
    			else if( Qnumber == 25 ) {$("#message").text("Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them. \"Vaibhav Shah\"");}
    			else if( Qnumber == 26 ) {$("#message").text("I'm not in this world to live up to your expectations and you're not in this world to live up to mine. \"Bruce Lee\"");}
    		
   				
    			$("p.tweet-extract").each(function() {
  				var text = $(this).text();
  				$(this).text('');
  				$(this).prepend('<a href=\"https://twitter.com/intent/tweet?source=webclient&text=' + encodeURIComponent(text) + '%20via%20' + window.location.href + '\" target=\"_blank\">' + text + '<span class=\"tweet-link\"><i class="fa fa-twitter-square fa-2x"></i> Tweet This Inspirational Message <i class="fa fa-twitter-square fa-2x"></i></span></a>');
				});
				
    		});    		
    		
    	});