let issues = [];

/*
 * Literal syntax
 * Let op: Zo maak je ene method met litera;
 * de method key wordt gescheiden door een : en heeft als value een function
 *
 */

let issue = {
    id: 0,
    name: 'typeof',
    description: 'The typeof operator returns a string indicating the type of the unevaluated operand. ',
    example: 'typeof 20',

    displayExample: function() {
        return this.example;
    }
};

/*
*
* function object
* De naam begint met een hoofdletter. (Gewoon een afspraak)
* De methods kun je in de body van het object meegeven.
* Let op: De mehtod wordt nu aangemaakt als een normale functie expression dus met een =
*
*
 */
function Issue(id, name, description, example) {

    this.id = id;
    this.name = name;
    this.description = description;
    this.example = example;


    // Methods in object
    this.displayIssue = function() {
        return this.name;
    },

    this.displayExample = function() {
        return this.example;
    }

}

 // * Methods in prototype
 // * Hiermee worden de functies gedeeld in alle nieuwe objecten die aangemaakt worden met new.

Issue.prototype = {

    displayIssue: function() {
    return this.name;
    },

    displayExample: function() {
        return this.example;
    }
};

/*
 *
 * Push new object
 *
 *
 */
issues.push(new Issue(issues.length, 'assignment', 'Statement that is used to set or change a value to a vaiable name', 'let x = 5;'));
// console.log(issues[0].name);
// alert(issues[0].displayExample());

/*
 *
 * Push literal object
 *
 *
 */
issues.push(new Issue(issues.length, issue.name, issue.description, issue.example));
// console.log(issues[1].id + ': ' + issues[1].displayIssue());

/*
 *
 * Push new object
 *
 *
 */
issues.push(new Issue(issues.length, 'assignment operator', 'An assignment operator assigns a value to its left operand based on the value of its right operand.', 'x = x + y' ));

/*
 *
 * Let op: kijk zelf na hoe de forEach voor een array werkt!
 * En wanneer dit niet handig is.
 *
 */
function showElement(element, index, array) {
    console.log (element.displayIssue() + ': ' +  element.displayExample());
}
issues.forEach(showElement);



