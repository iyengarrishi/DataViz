/**
 * @author Rishi Iyengar
 */

//I am now going to create a list of my books and sort those books into two new lists
		
			 var myBooks = [{"name":"LoTR", "author":"Tolkein", "genre":"fiction"}, 
			 				{"name":"harryPotter", "author":"Rowling", "genre":"fiction"},
			 				{"name":"steveJobs", "author":"Isaacson", "genre":"nonfiction"},
			 				{"name":"newJack", "author":"Conover", "genre":"nonfiction"},
			 				{"name":"freeMan", "author":"Sethi", "genre":"nonfiction"},
			 				{"name":"GoT", "author":"Martin", "genre":"fiction"}];
			 				
			 				console.log(myBooks);
			 				
			//I will now create two lists, based on genre, to divide my books into
			
			 var Fiction = [];
			 var nonFiction = [];
			 
			 /*Now I will create a for loop with an if/else statement
			  * Using this, I will tell the program to check the genre of all my books
			  * If it's fiction, add it to "Fiction", otherwise add it to "nonFiction"
			  */
			
			for (var i=0; i<6; i++){
				console.log(i);
				//creating a new variable to encompass every i of the list myBooks. Calling it thisBook
				var thisBook = myBooks [i];
				console.log(thisBook);
				
				//Now comes my if/else statement that will sort the books
				
				if(thisBook.genre == "fiction"){
					console.log(thisBook);
					//If the genre of the book is fiction, add it to Fiction
					Fiction.push(thisBook);
				}else{
					//Otherwise, add the book to nonFiction
					nonFiction.push(thisBook);
				}
				//This is the end of my if/else statement
			    
			    console.log(Fiction);
			    console.log(nonFiction);
				
			   }//This is the end of my for loop 
			
