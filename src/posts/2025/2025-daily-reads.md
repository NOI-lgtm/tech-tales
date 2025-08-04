---
title: "Today's reading topics on web forms, ux, and usability"
date: 2025-07-30
layout: post.njk
excerpt: "I’ve been exploring topics around web forms, UX, and usability to find ways to create more user-friendly digital experiences."
---

I’ve been exploring topics around web forms, UX, and usability to find ways to create more user-friendly digital experiences. It’s fascinating how small changes—like labeling, input types, or error messaging—can significantly reduce friction and confusion for users. Along with practical form improvements, I’m also looking into broader usability principles that guide how users interact with websites and apps, making sure those interactions feel smooth and intuitive.

<br>

## Key topics explored today

<br>

### 1. **Label placement in web forms**

**Source**: [Nielsen Norman Group – Placeholders in Form Fields](https://www.nngroup.com/articles/form-design-placeholders/)

**Summary**:
Placeholders should not replace labels. Screen readers often skip placeholders, and users forget them after typing. Labels should be persistent, visible, and placed either above or to the left of the input for maximum readability.

**My takeaway**:
I’ll explore using floating labels sparingly and always ensure labels are programmatically associated with inputs using `for` and `id`.

<br>

---

<br>

### 2. **Field length affordance**

**Source**: [Luke Wroblewski: input field length](https://www.lukew.com/ff/entry.asp?1083)

**Summary**:
The visible length of a field can communicate the expected input. For example, a short field suggests a short entry like a ZIP code.

**My takeaway**:
Visual affordances help guide users. In tomorrow’s experiment, I’ll mock up a checkout form with this principle applied.

<br>

---

<br>

### 3. **Error messaging best practices**

**Source**: [Gov.uk Design System – error messages](https://design-system.service.gov.uk/components/error-message/)

**Summary**:
Errors should be clear, polite, and point to how to fix the issue. Highlight errors at the top of the form and inline next to the field.

**My Takeaway**:
I’ll revise an old form design with inline validation and use ARIA `aria-describedby` for accessibility.

<br>

---

<br>

---

<br>

## Resources discovered

- [Form design patterns by Adam Silver](https://adamsilver.io/blog/form-design-from-zero-to-hero-all-in-one-blog-post/)
- [Web form usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/)
- [HTML5 mobile forms](https://www.smashingmagazine.com/2018/08/ux-html5-mobile-form-part-1/)
- [Grouping forms](https://www.uxmatters.com/mt/archives/2010/03/pagination-in-web-forms-evaluating-the-effectiveness-of-web-forms.php)
- [Avoid default field validation](https://adrianroselli.com/2019/02/avoid-default-field-validation.html)
- [Don’t use the maxlength attribute to stop users from exceeding the limit](https://adamsilver.io/blog/dont-use-the-maxlength-attribute-to-stop-users-from-exceeding-the-limit/)

<br>

---

<br>

## 💬 Quote of the day

> "Form follows function – that has been misunderstood. Form and function should be one, joined in a spiritual union." — Frank Lloyd Wright
