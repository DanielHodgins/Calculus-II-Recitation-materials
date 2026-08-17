var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "ws-week-1-day-1",
  "level": "1",
  "url": "ws-week-1-day-1.html",
  "type": "Worksheet",
  "number": "1",
  "title": "Week 1: Integration by Parts",
  "body": " Week 1: Integration by Parts     To be able to use the L.I.A.T.E. (Log, inverse, algebraic, Trig, exponential) rule    To be able to use the integration by parts formula or the tabular method    To be able to identify and         Instructions: Evaluate each integral using integration by parts. Show all of your work. When appropriate, use the L.I.A.T.E. rule to help you choose and .   Exponential by Trigonometric      What was challenging? Note what you wonder or notice as you solve the problem.        Logarithmic by Algebraic      What was challenging? Note what you wonder or notice as you solve the problem.     Inverse Trigonometric      What was challenging? Note what you wonder or notice as you solve the problem.        Exponential Composed with Algebraic      What was challenging? Note what you wonder or notice as you solve the problem.     Problem 5      What was challenging? Note what you wonder or notice as you solve the problem.        Whole Class Discussion     How did you decide what to choose for and ?    How did the L.I.A.T.E. rule help you, and where did it not give you an obvious answer?    What makes a choice of and effective?    What advice would you give someone who is learning integration by parts for the first time?     "
},
{
  "id": "ws-week-1-day-1-2",
  "level": "2",
  "url": "ws-week-1-day-1.html#ws-week-1-day-1-2",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   To be able to use the L.I.A.T.E. (Log, inverse, algebraic, Trig, exponential) rule    To be able to use the integration by parts formula or the tabular method    To be able to identify and     "
},
{
  "id": "ws-week-1-day-1-3-2",
  "level": "2",
  "url": "ws-week-1-day-1.html#ws-week-1-day-1-3-2",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "Exponential by Trigonometric.",
  "body": " Exponential by Trigonometric      What was challenging? Note what you wonder or notice as you solve the problem.   "
},
{
  "id": "ws-week-1-day-1-4-1",
  "level": "2",
  "url": "ws-week-1-day-1.html#ws-week-1-day-1-4-1",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "Logarithmic by Algebraic.",
  "body": " Logarithmic by Algebraic      What was challenging? Note what you wonder or notice as you solve the problem.   "
},
{
  "id": "ws-week-1-day-1-4-2",
  "level": "2",
  "url": "ws-week-1-day-1.html#ws-week-1-day-1-4-2",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "Inverse Trigonometric.",
  "body": " Inverse Trigonometric      What was challenging? Note what you wonder or notice as you solve the problem.   "
},
{
  "id": "ws-week-1-day-1-5-1",
  "level": "2",
  "url": "ws-week-1-day-1.html#ws-week-1-day-1-5-1",
  "type": "Worksheet Exercise",
  "number": "1.4",
  "title": "Exponential Composed with Algebraic.",
  "body": " Exponential Composed with Algebraic      What was challenging? Note what you wonder or notice as you solve the problem.   "
},
{
  "id": "ws-week-1-day-1-5-2",
  "level": "2",
  "url": "ws-week-1-day-1.html#ws-week-1-day-1-5-2",
  "type": "Worksheet Exercise",
  "number": "1.5",
  "title": "Problem 5.",
  "body": " Problem 5      What was challenging? Note what you wonder or notice as you solve the problem.   "
},
{
  "id": "ws-week-1-day-2",
  "level": "1",
  "url": "ws-week-1-day-2.html",
  "type": "Worksheet",
  "number": "2",
  "title": "Week 1 day 2",
  "body": " Week 1 day 2    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
