// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
      var object = {
          id: id,
          nameFirst: nameFirst,
          nameLast: nameLast,
      };
       return object;
} 
// in order to create the factory function above we must create and object.
// using the parameters as keys, we are now assigning those keys values that are equal to the arguements entered
//once the object is created, we return it



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
             //1. length(): returns the number of contacts within the list.
            // addContact(contact): takes a contact object to be added to the 
    }, addContact: function(contact){
        contacts.push(contact);
    }, findContact: function(fullName){
        for(let x = 0; x < contacts.length; x++){
            if (fullName === contacts[x].nameFirst + " " + contacts[x].nameLast){
             return contacts[x];
            }
            // return the contact object if found in the list
            // return undefinced if not on list
        }
        
        },
        removeContact: function(contact){
         contacts.pop(contact);
        },
       
// removeContact(contact): takes a contact object to be removed from 
//         the contact-list.
   printAllContactNames: function(){
     var nameArray = [];
    for( var i = 0; i < contacts.length; i++){
    nameArray.push((contacts[i].nameFirst + " " + contacts[i].nameLast));
}
return nameArray.join("\n");
// return contact list
//contact list should have all api
//printAllContactNames() needs to be a string
//full names and last names
//line break between

}
}

}
/* BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!*/

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
