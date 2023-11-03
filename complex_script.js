/** 
 * Filename: complex_script.js
 * 
 * Description: This script demonstrates a complex and sophisticated implementation of a contact management system. It incorporates various object-oriented programming principles, advanced data structures, and powerful algorithms.
 * 
 * Author: Your Name
 * Date: <current date>
 */

// Define the Contact class
class Contact {
  constructor(firstName, lastName, email, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Define the ContactManager class
class ContactManager {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  removeContactByIndex(index) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts.splice(index, 1);
    }
  }

  searchContacts(keyword) {
    const results = [];
    for (const contact of this.contacts) {
      if (
        contact.firstName.includes(keyword) ||
        contact.lastName.includes(keyword) ||
        contact.email.includes(keyword) ||
        contact.phoneNumber.includes(keyword)
      ) {
        results.push(contact);
      }
    }
    return results;
  }

  sortContactsByName() {
    this.contacts.sort((a, b) => {
      const nameA = a.getFullName().toUpperCase();
      const nameB = b.getFullName().toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  getContactCount() {
    return this.contacts.length;
  }
}

// Create a sample ContactManager instance
const contactManager = new ContactManager();

// Add contacts
contactManager.addContact(new Contact("John", "Doe", "john.doe@example.com", "1234567890"));
contactManager.addContact(
  new Contact("Jane", "Smith", "jane.smith@example.com", "9876543210")
);
// ... More contact additions

// Search contacts and print the results
console.log("Search results for 'John':");
const searchResults = contactManager.searchContacts("John");
for (const contact of searchResults) {
  console.log(contact.getFullName());
}

// Sort contacts by name
contactManager.sortContactsByName();

// Remove a contact at index 1 (Jane Smith)
contactManager.removeContactByIndex(1);

// Get the total contact count
console.log(`Total contacts: ${contactManager.getContactCount()}`);

// ... Additional functionality and usage of the ContactManager class and Contact class

// Extra complexity and sophistication can be added based on specific requirements and desired functionality.