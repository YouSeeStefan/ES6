let issues = [];

/*
 * Literal syntax
 * Let op: Zo maak je ene method met literal;
 * de method key wordt gescheiden door een : en heeft als value een function
 *
 */

let issue = {
    id: 0,
    name: 'typeof',
    description: 'The typeof operator returns a string indicating the type of the unevaluated operand. ',
    example: 'typeof 20',

    displayId: function() {
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

    this.displayDescription = function() {
        return this.description;
    },

    this.displayId = function() {
        return this.id;
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

/*
 *
 * Push literal object
 *
 *
 */
issues.push(new Issue(issues.length, issue.name, issue.description, issue.example));

/*
 *
 * Push another new object
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
    console.log ('ID: ' + element.displayIssue() + ': ' +  element.displayId());
    console.log('Description: ' + element.displayDescription());
    console.log (element.displayIssue() + ': ' +  element.displayExample());
}
issues.forEach(showElement);

