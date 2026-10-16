# CSE 134B HW2 – Bowen Wu Portfolio (Part 2)

Semantic, HTML-only portfolio site. The only CSS is borders plus the styles for the
`<tech-stack>` custom element; the only JavaScript is the `<hello-world>` custom
element and the short `<canvas>` demo on `experiments.html`.

## Structure

```
index.html                 Home
about.html                 About
projects.html              Projects + coursework
projects/bioloop.html      Case study
projects/habit-tracker.html
projects/memebro.html
experience.html            Experience, education, skills
contact.html               Contact form (not wired up in HW2)
experiments.html           template, audio, video, canvas, source, MathML
css/custom-elements.css    Styles for <tech-stack> only
js/hello-world.js          <hello-world> custom element
images/  media/            Placeholder images, audio and video
favicon.svg
resume.pdf                 ADD THIS: your résumé (linked from every page)
```

## Custom elements

- `<tech-stack>` (CSS only): groups the technologies used in a project.
  Used on Home, Projects, BioLoop, Experience and experiments.html.
- `<hello-world>` (JS): logs `Hello World!` to the console in `connectedCallback`
  without modifying the DOM. Placed in the footer of every page.

## Extra credit

MathML for E = mc² and the explanation of browser support are on `experiments.html`.

## Required tags

| Tag | Where |
|---|---|
| `<html>` | every page |
| `<head>` | every page |
| `<title>` | every page |
| `<meta>` | every page |
| `<link>` | every page |
| `<script>` | every page |
| `<style>` | every page |
| `<body>` | every page |
| `<main>` | every page |
| `<h1>` | every page |
| `<h2>` | every page |
| `<h3>` | every page |
| `<p>` | every page |
| `<section>` | every page |
| `<header>` | every page |
| `<footer>` | every page |
| `<nav>` | every page |
| `<div>` | contact.html |
| `<span>` | every page |
| `<br>` | contact.html |
| `<button>` | contact.html |
| `<noscript>` | index.html |
| `<b>` | projects.html, projects/bioloop.html |
| `<i>` | projects.html, projects/bioloop.html |
| `<strong>` | every page |
| `<em>` | about.html, projects/bioloop.html |
| `<a>` | every page |
| `<img>` | about.html, index.html |
| `<picture>` | about.html, index.html |
| `<iframe>` | contact.html |
| `<svg>` | projects/bioloop.html |
| `<ul>` | every page |
| `<ol>` | about.html |
| `<li>` | every page |
| `<form>` | contact.html |
| `<label>` | contact.html, projects/bioloop.html |
| `<fieldset>` | contact.html |
| `<legend>` | contact.html |
| `<input>` | contact.html |
| `<textarea>` | contact.html |
| `<article>` | every page |
| `<progress>` | projects/bioloop.html |
| `<dialog>` | contact.html |

## Experimental tags

| Tag | Where |
|---|---|
| `<template>` | experiments.html |
| `<audio>` | experiments.html |
| `<video>` | experiments.html |
| `<canvas>` | experiments.html |
| `<source>` | experiments.html |

## Validation

All pages pass https://validator.w3.org/ with no errors or warnings.
