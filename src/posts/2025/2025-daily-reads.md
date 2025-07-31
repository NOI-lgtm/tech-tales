---
title: "Today's Reading Topics on Web Forms, UX, and Usability"
date: 2025-07-30
layout: post.njk
excerpt: "I am exploring and researching on web forms"
---

## 🌐 Key Topics Explored Today

<br>

### 1. **Label Placement in Web Forms**

**Source**: [Nielsen Norman Group – Placeholders in Form Fields](https://www.nngroup.com/articles/form-design-placeholders/)

**Summary**:
Placeholders should not replace labels. Screen readers often skip placeholders, and users forget them after typing. Labels should be persistent, visible, and placed either above or to the left of the input for maximum readability.

**My Takeaway**:
I’ll explore using floating labels sparingly and always ensure labels are programmatically associated with inputs using `for` and `id`.

<br>

---

<br>

### 2. **Field Length Affordance**

**Source**: [Luke Wroblewski – Input Field Length](https://www.lukew.com/ff/entry.asp?1083)

**Summary**:
The visible length of a field can communicate the expected input. For example, a short field suggests a short entry like a ZIP code.

**My Takeaway**:
Visual affordances help guide users. In tomorrow’s experiment, I’ll mock up a checkout form with this principle applied.

<br>

---

<br>

### 3. **Error Messaging Best Practices**

**Source**: [Gov.uk Design System – Error Messages](https://design-system.service.gov.uk/components/error-message/)

**Summary**:
Errors should be clear, polite, and point to how to fix the issue. Highlight errors at the top of the form and inline next to the field.

**My Takeaway**:
I’ll revise an old form design with inline validation and use ARIA `aria-describedby` for accessibility.

<br>

---

<br>

## 🔍 Reflections and Next Steps

- I’m noticing consistent UX heuristics across different sources: visibility, feedback, and user control.
- Tomorrow, I’ll dive into **progressive disclosure** in form design.

<br>

---

<br>

## 🛠️ Tools/Resources Discovered

- [Form Design Patterns by Adam Silver](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/)
- [Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)
- [HTML5 mobile forms](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/)
- [Grouping forms](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php)
- [Avoid default field validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html)
- [Don’t use the maxlength attribute to stop users from exceeding the limit](https://adamsilver.io/blog/dont-use-the-maxlength-attribute-to-stop-users-from-exceeding-the-limit/)

<br>

---

<br>

## 💬 Quote of the Day

> "Form follows function – that has been misunderstood. Form and function should be one, joined in a spiritual union." — Frank Lloyd Wright
