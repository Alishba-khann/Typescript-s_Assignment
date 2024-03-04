/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.*/

 let guest_List : string[] = ['Arshad','Umar','Sarim','Saim'];
  // for(let i=0;i<guest_List.length;i++){
  //   console.log('Dear Mr.' +guest_List[i] +',It is our pleasure to you in our party.Thank you!\n\n');
  // }
  /*Changing Guest List: You just heard that one of your guests can’t make the dinner,
   so you need to send out a new set of invitations.
   You’ll have to think of someone else to invite.*/
   for(let i=0;i<guest_List.length;i++)
   {
   console.log('Dear Mr.' +guest_List[i] +',\nIt is our pleasure to you in our party.\nThank you!\n\n');
  }
  let absent_Guest : string = 'Umar';
  let new_Guest: string ='Imran Khan';
   guest_List[1] = new_Guest
   for(let i=0;i<guest_List.length;i++)
   {
    console.log('Dear Mr.' +guest_List[i] +',\nIt\'s our pleasure to you in our party.\nThank you!\n\n');
  }
  console.log(`'Mr. ${absent_Guest} is not coming to our party today'`);