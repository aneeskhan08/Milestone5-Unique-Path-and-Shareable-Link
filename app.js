"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("print-this");
let resumeForm = document.querySelector("#cv-form");
let resumeOutput = document.querySelector("#resume-output");
let editBtn = document.querySelector("#edit-btn");
resumeForm === null || resumeForm === void 0 ? void 0 : resumeForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    resumeOutput.style.display = "block";
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const education = document.getElementById("education");
    const experience = document.getElementById("experience");
    const skills = document.getElementById("skills");
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("please fill all field");
        return;
    }
    document.getElementById("resumeName").innerText = `Name: ${name.value}`;
    document.getElementById("resumeEmail").innerText = `Email: ${email.value}`;
    document.getElementById("resumePhone").innerText = `Phone: ${phone.value}`;
    document.getElementById("resumeEducation").innerText = `Education: ${education.value}`;
    document.getElementById("resumeExperience").innerText = `Experience: ${experience.value}`;
    document.getElementById("resumeSkils").innerText = `Skills: ${skills.value}`;
});
// Edit Resume button functionality
editBtn === null || editBtn === void 0 ? void 0 : editBtn.addEventListener("click", () => {
    var _a, _b, _c, _d, _e, _f;
    resumeForm.style.display = "block"; // Show the form again
    resumeOutput.style.display = "none"; // Hide the resume output
    editBtn.style.display = "none"; // Hide the edit button
    // Repopulate the form with current resume data
    const name = (_a = document.getElementById("resumeName")) === null || _a === void 0 ? void 0 : _a.innerText.split(': ')[1];
    const email = (_b = document.getElementById("resumeEmail")) === null || _b === void 0 ? void 0 : _b.innerText.split(': ')[1];
    const phone = (_c = document.getElementById("resumePhone")) === null || _c === void 0 ? void 0 : _c.innerText.split(': ')[1];
    const education = (_d = document.getElementById("resumeEducation")) === null || _d === void 0 ? void 0 : _d.innerText;
    const experience = (_e = document.getElementById("resumeExperience")) === null || _e === void 0 ? void 0 : _e.innerText;
    const skills = (_f = document.getElementById("resumeSkils")) === null || _f === void 0 ? void 0 : _f.innerText;
    // Set the form inputs to these values
    document.getElementById("name").value = name !== null && name !== void 0 ? name : '';
    document.getElementById("email").value = email !== null && email !== void 0 ? email : '';
    document.getElementById("phone").value = phone !== null && phone !== void 0 ? phone : '';
    document.getElementById("education").value = education !== null && education !== void 0 ? education : '';
    document.getElementById("experience").value = experience !== null && experience !== void 0 ? experience : '';
    document.getElementById("skills").value = skills !== null && skills !== void 0 ? skills : '';
});
// shareable link
let username = document.getElementById("username");
const shareBtn = document.querySelector("#share-btn");
shareBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shareableLink = `https://milestone5-unique-path-and-shareable-link.vercel.app//?username.value/${username.value.replace(/\s+/g, '_')}`;
        yield navigator.clipboard.writeText(shareableLink);
        alert("Shareable linkcopied to Clipboard!");
    }
    catch (err) {
        alert("Failed to copy link clipboard . please try again!");
    }
}));
$(document).ready(function () {
    $("#print-btn").on("click", function () {
        $("#resume-output").printthis();
    });
});
