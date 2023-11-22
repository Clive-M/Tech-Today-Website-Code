const articleAICheckbox = document.getElementById("article_ai_checkbox");
const articleBusinessCheckbox = document.getElementById("article_buiness_checkbox")
const articleAutomationCheckbox = document.getElementById("article_automation_checkbox")

const article_heading1 = document.getElementById("article_heading1");
const article_image1 = document.getElementById("article_image1")
const article_paragraph1 = document.getElementById("article_paragraph1");

const article_heading2 = document.getElementById("article_heading2");
const article_image2 = document.getElementById("article_image2")
const article_paragraph2 = document.getElementById("article_paragraph2");

const article_heading3 = document.getElementById("article_heading3");
const article_image3 = document.getElementById("article_image3")
const article_paragraph3 = document.getElementById("article_paragraph3");

document.addEventListener("DOMContentLoaded", function() {
    articleAICheckbox.addEventListener("change", registerAICheckboxChecked);
    articleBusinessCheckbox.addEventListener("change", registerBusinessCheckboxChecked);
    articleAutomationCheckbox.addEventListener("change", registerAutomationCheckboxChecked)
});

function registerAICheckboxChecked() {
    if(articleAICheckbox.checked == true){
        article_heading1.hidden = false;
        article_image1.hidden = false;
        article_paragraph1.hidden = false;
        articleBusinessCheckbox.disabled = true;
        articleAutomationCheckbox.disabled = true;
    }else{
        article_heading1.hidden = true;
        article_image1.hidden = true;
        article_paragraph1.hidden = true;
        articleBusinessCheckbox.disabled = false;
        articleAutomationCheckbox.disabled = false;
    }
}

function registerBusinessCheckboxChecked(){
    if(articleBusinessCheckbox.checked == true){
        article_heading2.hidden = false;
        article_image2.hidden = false;
        article_paragraph2.hidden = false;
        articleAICheckbox.disabled = true;
        articleBusinessCheckbox.disabled = false;
        articleAutomationCheckbox.disabled = true;
    }else{
        article_heading2.hidden = true;
        article_image2.hidden = true;
        article_paragraph2.hidden = true;
        articleAICheckbox.disabled = false
        articleBusinessCheckbox.disabled = false;
        articleAutomationCheckbox.disabled = false;
    }
}

function registerAutomationCheckboxChecked(){
    if(articleAutomationCheckbox.checked == true){
        article_heading3.hidden = false;
        article_image3.hidden = false;
        article_paragraph3.hidden = false;
        articleAICheckbox.disabled = true;
        articleBusinessCheckbox.disabled = true;
        articleAutomationCheckbox.disabled = false;
    }else{
        article_heading3.hidden = true;
        article_image3.hidden = true;
        article_paragraph3.hidden = true;
        articleAICheckbox.disabled = false;
        articleBusinessCheckbox.disabled = false;
        articleAutomationCheckbox.disabled = false;
    }
}