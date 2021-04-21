var cat = {
    "name": "Fluffy",
    "activities": ["play", "eat cat food"],
    "catFriends": [
    {
    "name": "bar",
    "activities": ["be grumpy", "eat bread omblet"],
    "weight": 8,
    "furcolor": "white"
    }, 
    {
    "name": "foo",
    "activities": ["sleep", "pre-sleep naps"],
    "weight": 3
    }
    ]
   }
   console.log(cat);
      
   //1. Add height and weight to Fluffy
   if(cat.name==="Fluffy")
   {
       cat.height=3;
       cat.weight=24;
   }
   console.log("\n1. Add height and weight to Fluffy:");
   console.log(cat);
   
   //2. Fluffy name is spelled wrongly. Update it to Fluffyy
   if(cat.name==="Fluffy")
   {
       cat.name="Fluffyy";
   }
   console.log("\n2. Fluffy to Fluffyy:");
   console.log(cat);
   
   //3. List all the activities of Fluffyy’s catFriends.
   var x="";
   for(var i in cat.catFriends){
       x+= cat.catFriends[i].activities+ "\n";
   }
   console.log("\n3. All the activities of Fluffyy’s catFriends:");
   console.log(x);

   //4. Print the catFriends names.
   var y="";
   for(var i in cat.catFriends){
       y+=cat.catFriends[i].name+"\n";
   }
   console.log("\n4. catFriends names:");
   console.log(y);

   //5. Print the total weight of catFriends
   var weight=0;
   for(var i in cat.catFriends){
       weight+=cat.catFriends[i].weight;
   }
   console.log("\n5. Total weight of catFriends: "+weight);

   //6. Print the total activities of all cats (op:6)
   var count=0;
   for(var i in cat.activities){
       count+=1;
       for(var j in cat.catFriends[i].activities){
           count+=1;
       }
   }
   console.log("\n6. Total activities of all cats: "+count);

   //7. Add 2 more activities to bar & foo cats
   for(var i in cat.name){
       if(cat.name==="bar")
       {
           cat.activities[cat.activities.length]="Jumpy";
           cat.activities[cat.activities.length]="Happy";
       }
       else if(cat.name==="foo")
       {
           cat.activities[cat.activities.length]="barks at times";
           cat.activities[cat.activities.length]="lazy";break;
       }
       else if(cat.catFriends)
       {
           if(cat.catFriends[i].name==="bar")
           {
            cat.catFriends[i].activities[cat.catFriends[i].activities.length]="Jumpy";
            cat.catFriends[i].activities[cat.catFriends[i].activities.length]="Happy";
           }
           if(cat.catFriends[i].name==="foo")
           {
            cat.catFriends[i].activities[cat.catFriends[i].activities.length]="barks at times";
            cat.catFriends[i].activities[cat.catFriends[i].activities.length]="lazy";
            break;
           }
    }
   }
   console.log("\n7. Added 2 more activities to bar & foo cats:");
   console.log(cat);

   //8. Update the fur color of bar
   for(var i in cat.name){
    if(cat.name==="bar")
    {
        cat.furcolor="Black";
        break;
    }
    else if(cat.catFriends)
    {
        if(cat.catFriends[i].name==="bar")
        {
            cat.catFriends[i].furcolor="Brown";
            break;
        }
    }
}
console.log("\n8. Updated the fur color of bar:");
console.log(cat);