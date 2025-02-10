"use strict";

const $ = selector => document.querySelector(selector);

// Error message for invalid input
const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;

// Function to focus and select an input field
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// Calculate tax amount
const calculateTax = (subtotal, taxRate) => {
    const taxAmount = subtotal * taxRate / 100; 
    return taxAmount; 
};

// Process the entries and calculate the total
const processEntries = () => {
    const sale = parseFloat($("#sale").value);
    const tax = parseFloat($("#tax").value);

    // Error checking for sale and tax
    if (isNaN(sale) || sale <= 0) {
        alert("Sales Amount must be a valid number greater than zero.");
        focusAndSelect("#sale");
    } else if (isNaN(tax) || tax <= 0 || tax >= 100) {
        alert(getErrorMsgTax("Tax Percent"));
        focusAndSelect("#tax");
    } else {
        // Calculate the total (sale + tax)
        $("#total").value = (sale + calculateTax(sale, tax)).toFixed(2);
    }
};

// Clear entries in the input fields
var clearEntries = () => {
    $("#sale").value = "";
    $("#tax").value = "";
    $("#total").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#sale").focus();
});
