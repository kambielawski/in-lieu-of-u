import React from 'react';

const blogposts = [
  {
    title: "Operating System Virtualization",
    date: "11/16/2020",
    image: "",
    url: "OperatingSystemVirtualization",
    html: <>
      <p>Virtualization is a concept that has eluded my understanding until recently and it deserves it&rsquo;s own post. So this one is about virtualization in a computer system, which is achieved by a dance between the hardware and the operating system software. </p>
      <p>First, what&rsquo;s virtualization and why is it important? Virtualization is an abstraction of a computer&rsquo;s hardware to make programming the computer easier. Essentially, the hardware is too complicated to program directly, so operating systems will employ virtualization of the CPU and memory in order to ease the burden of the programmer. As a programmer, it&rsquo;s useful to know the nature of this abstraction layer because every computer you write programs for is going to have an operating system installed and running along with your program. </p>
      <p>OS&rsquo;s perform two major virtualizations: the CPU (the processor) and memory (i.e. RAM + storage). An OS can be thought of as a manager of these two physical components of a computer. A prerequisite concept to understanding how this is accomplished are <strong>processes. </strong>A process == a running program (a program that is <em>not </em>running is just a bunch of instructions stored in a drive). An OS will take a program and start running it by creating a process for it.</p>
      <p>When you run a program (e.g. click on a .exe file), along with creating a process the OS will allocate a segment of physical memory for it. That allocation of memory is the virtualization of memory. From the program&rsquo;s POV, it thinks it has the computer&rsquo;s memory all to itself. From the OS&rsquo;s POV, the program really only has a small segment. Here the programmer is relieved of some complexity: programs have their own memory that can be referred to without having to worry about other processes using the same memory. That segment of memory is referenced by the process&rsquo;s <strong>virtual address space</strong>. Whenever you refer explicitly to some memory address in your program, that memory address is virtual. When the computer compiles or interprets the code, all of your address references goes through an address translation to get the physical memory address.</p>
      <p>The <strong>scheduler</strong> helps with the virtualization of the CPU. Programs have instructions they need to run one at a time, and if you have 100 running programs and only 1 processor, the scheduler will handle the execution of all 100 programs in (hopefully) a reasonable manner. Again, letting the OS handle this lifts a heavy burden off of the programmer; worrying about whether or not their program will actually execute is something a programmer probably shouldn&rsquo;t have to worry about. Something that should be stressed here: scheduling is a <em>hard </em>problem in operating systems research. There are a bunch of different approaches to effectively scheduling potentially hundreds of processes, but here I just want to give you a sense of what&rsquo;s considered &ldquo;effective&rdquo; scheduling. </p>
      <p>First is the idea of fairness. Most OS architectures share a communitarian philosophy and won&rsquo;t exclude any process from execution. Operating systems may employ policies to distribute the timeshare of the CPU differently based on some metric of the importance of a process, but OS schedulers will always schedule <em>some </em>amount of CPU time for all processes' instructions. </p>
      <p>Another performance metric is <em>turnaround time,</em> which is simply the average time it takes a process to run ALL of its instructions. This isn&rsquo;t as straightforward as multiplying the number of instructions by the time per instruction; when there are hundreds of processes trying to run thousands of instructions each, how do we schedule all of them to? If we&rsquo;re trying to optimize for turnaround time only, simply executing the program with the least amount of instructions (then the next least, then the next&hellip;) will provably do this. But that means the longest program won&rsquo;t get to run at all until all the shorter ones have run, which is why a <em>response time </em>metric is also taken into account. Response time is essentially the time between a process&rsquo;s first &ldquo;arrival&rdquo; (i.e. when it is first created and given to the scheduler) and when the process&rsquo;s first instruction runs. If 100 processes were created at once, and we ran them all to completion in order, of course the response time will be atrocious for the last processes. So usually<em> </em>operating systems try to trade off the two in a satisfactory way by switching program execution at a set interval and employing policies to achieve fairness and a good balance of turnaround time and response time. </p>
      <p>There are a bunch of different ways of doing all of this of course, so here are some pointers to currently used methods:</p>
      <ul>
      <li>
      <p><a href="https://developer.ibm.com/tutorials/l-completely-fair-scheduler/">Linux's Completely Fair Scheduler (CFS)</a></p></li>
      <li>
      <p><a href="http://pages.cs.wisc.edu/~remzi/OSTEP/Citations/notes-solaris.pdf">Multilevel Feedback Queue Schedulers</a></p></li>
      <li>
      <p><a href="http://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-lottery.pdf">Proportional Share / Lottery Scheduling</a> (lottery scheduling uses randomness, and though I don&rsquo;t like adding randomness unless necessary, it is an interesting solution)</p></li></ul>
      <p>If you take away anything from this, it&rsquo;s that the OS is a resource manager. Its major functions are to manage critical resources that programs need - namely, CPU time and memory. It does this by creating an abstraction called a process for each running program and allocating memory &amp; CPU time to each of these. </p>
      <p />
      <p />
    </>
  },
  {
    title: "Against Libertarianism",
    date: "11/12/2020",
    image: "",
    url: "AgainstLibertarianism",
    tags: ["philosophy"],
    html: <>
      <p>I have heard enough anti-libertarian arguments that I want to write them down and really consider them. In brief, here are three objections to the libertarian ideal that lead me to think it isn&rsquo;t much of an ideal:</p>
      <p>1. Nice in theory</p>
      <p>Libertarianism is nice <em>in theory. </em>Contracts are law, no violation of individual freedoms, property ownership is cut and dry, so there&rsquo;s no reason for violence. But in <em>practice, </em>none of these things can ever be guaranteed. Imagine you&rsquo;re walking in the state of nature, roaming an apple orchard planted by God Himself. As you&rsquo;re converting nature&rsquo;s resources to your own property with your labor, you hear my voice behind you: &ldquo;that apple is mine.&rdquo; As you turn around, you think <em>no it&rsquo;s not&hellip; I picked it myself! </em>But when you see the glock in my hand, you&rsquo;re certain: the apple you hold is not yours, it is mine. &ldquo;But&hellip; that&rsquo;s so immoral,&rdquo; you say. &ldquo;Morals shmorals,&rdquo; I reply.</p>
      <p>2.<a href="https://kambielawski.atlassian.net/wiki/spaces/KS/pages/452296705/Making+Sense+of+the+Macro"> Coordination problems</a></p>
      <blockquote style={{
  display: 'block',
  marginTop: '1em',
  marginBottom: '1em',
  marginLeft: '40px',
  marginRight: '40px',
}}>
      <p>"<strong>Coordination problems</strong> are cases in which everyone agrees that a certain action would be best, but the free market cannot coordinate them into taking that action."</p></blockquote>
      <p>Ideas of the form, &ldquo;wouldn&rsquo;t it be great if everyone just did X&rdquo; are easy to come by. But unfortunately, it is often the case in a free market that if <em>everyone </em>did X, an incentive for not doing X arises. But X only works if <em>everyone </em>did it, so there will be defectors acting in their own self-interest ruining the optimal outcome. &ldquo;Rent-seeking&rdquo; is an economic behavior where an entity finds a way to extract value without contributing value. If you owned a segment of a river and you simply charged a fee for people to pass through your river, you&rsquo;re a rent-seeker. Even worse is if you inherited that land; somehow you have acquired a free lunch, even though <a href="https://en.wikipedia.org/wiki/There_ain%27t_no_such_thing_as_a_free_lunch">there ain&rsquo;t no such thing</a>. </p>
      <p>3. What <em>is </em>property?</p>
      <p>I understand &ldquo;property&rdquo; as some mapping of physical objects to&hellip; a consciousness? Wait, no - a bat might be conscious, so - a rational consciousness? Well, humans aren&rsquo;t all <em>that </em>rational&hellip; Wait, what is<em> </em>consciousness again? My problem is mostly with the process of inserting an object into the ownership map. The hash function that makes the most sense to me is some <a href="http://www.daviddfriedman.com/Academic/Property/Property.html">positive account of property rights</a>, where really, power over control of the object is equivalent to ownership of the object. This is the same idea as my owning your apple because my glock says so. </p>
      <p>So these objections lead me to think libertarianism, taken to a logical conclusion, might be a dead-end. I still think it could be an escape rope out of our current situation in the US - the government is a monstrosity in its current form. I don&rsquo;t think I&rsquo;ll ever <em>not </em>be fond of libertarian principles, because freedom and individuality are awesome. Also, if any of the above are non-issues in your eyes, please convince me, because I&rsquo;m feeling a little philosophically naked without libertarianism. </p>
      <p />
    </>
  },
  {
    title: "Book: The Annotated Turing",
    date: "09/06/2020",
    image: "",
    url: "AnnotatedTuring",
    tags: ["books", "computing"],
    html: <>
      <p>The notion of computation was birthed and was developed significantly by mathematicians. In Alan Turing&rsquo;s seminal 1936 paper&nbsp;<strong>On Computable Numbers and an Application to the Entscheidungsproblem</strong>, Turing defines a new subset of real numbers with his notion of computation. To make computation easy to grasp, Turing creates what is probably one of the most famous intuition pumps in history: the &ldquo;universal computing machine.&rdquo; As we know it, the Turing Machine. He uses it to solve a 19th century mathematical problem, the &ldquo;entscheidungsproblem,&rdquo; or, the&nbsp;<em>decision&nbsp;</em>problem.&nbsp;</p>
      <p>Charles Petzold&rsquo;s&nbsp;<em>The Annotated Turing&nbsp;</em>is a wonderful guide through Turing&rsquo;s dense, theory heavy, 36 page paper. It can be very hard to traverse a mathematical paper like this. In fact, after reading Petzold&rsquo;s book, I think this is the&nbsp;<em>only&nbsp;</em>way to traverse a research paper of this depth (as an outsider to the field). Petzold corrects many errors Turing managed to make in his original paper. He also provides useful examples, further explanation when none is given, and rich historical context. Reading a paper with none of these things is bound to result in misunderstanding. I wish a book like this existed for every challenging research paper. A summary of this book is moreso a summary of Turing&rsquo;s paper plus the incredibly useful context and corrections added by Charles Petzold.</p>
      <p>First, some historical context. What was Turing even trying to do here? Computation didn&rsquo;t simply come to him in a dream, and it surely wouldn&rsquo;t have been published if it came out of the blue. No, Turing&rsquo;s notion of computation was an unbelievably novel solution for a mathematical problem named by David Hilbert in the 19th century:</p>
      <p style={{marginLeft: '30px'}}>&ldquo;The decision problem [<em>das entscheidungsproblem</em>] is solved when we know a procedure with a finite number of operations that determines the validity or satisfy ability of any given expression.... The decision problem must be considered the main problem of mathematical logic.&rdquo;</p>
      <p style={{marginLeft: '30px'}}>(From Hilbert and Ackermann&rsquo;s&nbsp;<em>Grundz&uuml;ge der Theoretischen Logik&nbsp;</em>(&ldquo;The Restricted Functional Calculus&rdquo;))</p>
      <p>The question Turing was trying to address was this: given any mathematical/logical expression, is there a general way to say whether or not it is <a href="https://en.wikipedia.org/wiki/Validity_(logic)">valid</a>? Here, valid means it is a formula of a certain formal system (eg logic). So is there a decision procedure we can follow to determine whether or not a certain mathematical expression is well formed/valid? [spoiler] Turing shows that no, a decision procedure does not exist. &ldquo;The Entscheidungsproblem cannot be solved.&rdquo;</p>
      <p>Turing lays out quite a bit of groundwork to prove this. The paper is divided into 11 sections. Sections 1-7 is the groundwork for his proof, where he introduces the idea of using a machine to calculate numbers, the definitions and notation he&rsquo;ll be using, and &ldquo;universal computing machines.&rdquo; Sections 8, 9, and 10 lay out the logic and proves the lemmas necessary for his ultimate proof. Section 11, then, is the proof.</p>
      <p>In section 1, &ldquo;computing machines&rdquo; are introduced. They consist of a tape of arbitrary length with squares containing symbols, and a scanner mechanism to &ldquo;scan&rdquo; the symbols on the tape. The scanner can perform essentially five operations: read the currently scanned symbol, erase the currently scanned symbol, print a symbol on a blank square, move left, and move right. &ldquo;It is my contention that these operations include all those which are used in the computation of a number&rdquo; (232). So that&rsquo;s it: a system that has some pretty elementary operations, any finite number of symbols, and read/write capabilities. In section 2, Turing clarifies his definition of a computing machine: it is only those machines which result in a tape with 0 and 1 as the symbols that he considers computing machines. The computed number is whatever is left on the tape after computation, a binary decimal representing a number between 0 and 1, where the decimal point is implied to exist before the first binary digit. So the number .0101010101... on a tape is 1/3 in binary.&nbsp;</p>
      <p>1/3 is precisely the number Turing computes with his first machine in the next section. An&nbsp;<em>instruction&nbsp;</em>(Turing names it a &ldquo;machine-configuration&rdquo;) is essentially made up of multiple operations conditional on the symbol on currently scanned square.</p>
      <p>Here&rsquo;s what the entire machine looks like, made up of 4 instructions:</p>
      <table data-layout="default">
      <tbody>
      <tr>
      <th>
      <p><strong>Config</strong></p></th>
      <th>
      <p><strong>Scanned symbol</strong></p></th>
      <th>
      <p><strong>Operations</strong></p></th>
      <th>
      <p><strong>Next config</strong></p></th></tr>
      <tr>
      <td>
      <p>A</p></td>
      <td>
      <p>Blank</p></td>
      <td>
      <p>P0, R</p></td>
      <td>
      <p>B</p></td></tr>
      <tr>
      <td>
      <p>B</p></td>
      <td>
      <p>Blank</p></td>
      <td>
      <p>R</p></td>
      <td>
      <p>C</p></td></tr>
      <tr>
      <td>
      <p>C</p></td>
      <td>
      <p>Blank</p></td>
      <td>
      <p>P1, R</p></td>
      <td>
      <p>D</p></td></tr>
      <tr>
      <td>
      <p>D</p></td>
      <td>
      <p>Blank</p></td>
      <td>
      <p>R</p></td>
      <td>
      <p>A</p></td></tr></tbody></table>
      <p>We start at&nbsp;<strong>A.&nbsp;</strong>The tape starts blank, so the scanned symbol is blank, so we perform the operations. We print a zero, then move right, then go into configuration B. In configuration&nbsp;<strong>B</strong>&nbsp;we see another blank, so we go right, then go into&nbsp;<strong>C</strong>. In C, we see a blank, so we print 1 and go right, then go to&nbsp;<strong>D</strong>. D goes right and repeats the whole process.</p>
      <p>Clearly a simple machine. We don&rsquo;t even get to see the conditional branching that occurs when there&rsquo;s a chance we see some symbol instead of a blank square. But Turing has to start simple to build an intuition for the complexity that comes further along. Here&rsquo;s what a configuration conditional configuration looks like:</p>
      <table data-layout="default">
      <tbody>
      <tr>
      <th>
      <p><strong>Config</strong></p></th>
      <th>
      <p><strong>Scanned Symbol</strong></p></th>
      <th>
      <p><strong>Operations</strong></p></th>
      <th>
      <p><strong>Next Config</strong></p></th></tr>
      <tr>
      <td>
      <p>A</p></td>
      <td>
      <p>0</p></td>
      <td>
      <p>P0</p></td>
      <td>
      <p>A</p></td></tr>
      <tr>
      <td>
      <p /></td>
      <td>
      <p>1</p></td>
      <td>
      <p>R, R, P1</p></td>
      <td>
      <p>A</p></td></tr>
      <tr>
      <td>
      <p /></td>
      <td>
      <p>Blank</p></td>
      <td>
      <p>R, R, P0</p></td>
      <td>
      <p>A</p></td></tr></tbody></table>
      <p>There, we&rsquo;ve condensed our 1/3-computing machine to a single instruction. We&rsquo;ve also increased the number of operations one instruction can perform. The classic Turing Machine is limited to one print and one move, which are the rules his machines play by for most of his paper. If you play out the machine above, you&rsquo;ll notice the binary digits are printed on every&nbsp;<em>other&nbsp;</em>square on the tape. Turing gives room after each digit so the digit can be &ldquo;marked&rdquo; by another symbol, maybe the symbol&nbsp;<em><strong>#&nbsp;</strong></em>or something.&nbsp;<em>Subroutines -&nbsp;</em>a word that Turing doesn&rsquo;t use but helps understanding - are used frequently. An example of a subroutine can be abstractly described as &ldquo;go left until you see the symbol&nbsp;<em><strong>#</strong></em>&rdquo; or even &ldquo;find the first digit of this number.&rdquo; The notion of subroutines lets us venture into more complex machine behavior while still consisting of elementary fundamental operations.&nbsp;To be clear, every subroutine in the paper is well defined with a table like above, not with a sentence describing what the machine will do - every machine provably works.</p>
      <p>An interesting step that Turing takes is proving the <a href="https://en.wikipedia.org/wiki/Recursively_enumerable_set">enumerability</a> of the computable numbers. This deserves a whole digression into number classes, infinity, but I will leave it to the book to describe because it does it so elegantly. Essentially, Turing shows that every possible Turing machine can correspond with an unique finite integer. He calls it the Description Number of the machine, and since integers are enumerable, computable numbers are too. Description Numbers are used to show a few other things. You can&rsquo;t, for example, determine whether a machine will eventually print a 1 or a 0 given the instructions of the machine (encoded in the Description Number). This probably inspired Martin Davis to describe the halting problem for the first time, stating that there is no general way to tell whether a machine will eventually stop running (which is out of place in the context of this paper, because Turing only described machines that run forever).</p>
      <p>The grand finale of the paper consists of a rigorous and hard-to-follow proof, where Turing builds a monster of a formula consisting of 6 nested quantifiers and a surprising amount of errors that needed correction by Petzold. I definitely will not try to explain it because I am far from understanding it myself, but the result is the proof that no general procedure to determine the validity of a mathematical expression exists. It&rsquo;s a result that&rsquo;s quite rich in hidden implications, but &ldquo;the structure Turing built to support this result - the imaginary device now known as the Turing Machine - ultimately would become more interesting and fruitful than the actual proof....&rdquo;</p>
      <p>Turing created something timeless here: a tool to describe what exactly &ldquo;computing&rdquo; is. A required class to complete my computer science degree is <em>Theory of Computing, </em>where Turing machines, decidability, and the limits of computation are explored. This paper was the foundation of this new field. The inquiry into computation has been a fruitful one. Computers now are capable of ridiculous things; it&rsquo;s easy to forget that they are carrying out fundamentally Turing-esque operations. Computation has become a powerful epistemological tool, too. Many processes can be thought of in computational terms; many people (including myself) believe that the universe itself is a Turing machine. Which implies nothing that occurs in the universe is but a computation (including consciousness).</p>
      <p>I can&rsquo;t recommend this book enough if you want to get a seriously well researched and thoroughly explained introduction to the conceptual bedrock of computing.&nbsp;</p>
    </>
  },
  {
    title: "The Frailty of Reputation",
    date: "09/04/2020",
    image: "",
    url: "FrailtyOfReputation",
    tags: ["misc"],
    html: <>
      <p>Reputation is frail. It is others&rsquo; opinions of you, your outward-facing image, the entity people talk about when you are brought up and you are not around. People tend to care deeply about their reputation (including myself) - it&rsquo;s one of those outdated software programs we all seem to have installed in our brains. During the thousands of years we spent in communities where everyone knows each other, those who spent time cultivating and maintaining their tribal reputation were probably more likely to survive.&nbsp;Like many of our other monkey behaviors, I believe we should be wary of our desire to build or keep a good reputation. </p>
      <p>In Robert Greene&rsquo;s&nbsp;<em>48 Laws of Power,&nbsp;</em>Law 5 states:</p>
      <p style={{marginLeft: '30px'}}><em>Reputation is the cornerstone of power. Through reputation alone you can intimidate and win; once it slips, however, you are vulnerable, and will be attacked on all sides. Make your reputation unassailable. Always be alert to potential attacks and thwart them before they happen. Meanwhile, learn to destroy your enemies by opening holes in their own reputations. Then stand aside and let public opinion hang them.&nbsp;</em><br /></p>
      <p>I don&rsquo;t think I disagree with his idea that reputation&nbsp;<em>is&nbsp;</em>something that can be manipulated in your favor in one way or another, but I do reject the entire worldview that is presented here. Even if we set aside the pursuit of power and the uber-competitiveness, there&rsquo;s something inherently gross about tending to your reputation and wielding it as a tool. </p>
      <p> If your reputation is anything other than a description of who you actually are, you are a faker. There&rsquo;s this John Wooden quote that sums up this idea: </p>
      <p style={{marginLeft: '30px'}}>&ldquo;Character is what you really are. Reputation is what people say you are. Reputation is often based on character &ndash; but not always.&rdquo;</p>
      <p>So here&rsquo;s exactly the problem with the worldview presented by Robert Greene: &ldquo;cultivating a reputation&rdquo; is what you do when you&rsquo;d like others to perceive you to be something you&rsquo;re not. The person who cannot supply enough value to the tribe resorts to convincing others that they&nbsp;<em>are&nbsp;</em>providing value or exaggerating the little value they do provide.&nbsp;</p>
      <p>I feel I&rsquo;ve been a little harsh here; I should reiterate that this is an annoyingly innate instinct we have. I frequently catch myself worrying about my reputation (i.e. what others think/say about me), and I&rsquo;m certain there are times where I never do catch myself. The desire to fit in or be accepted is among some of the strongest desires we are subject to. Many times the urge to embellish or defend your reputation or attack someone else&rsquo;s is automatic. But to do so is fundamentally fraudulent and in direct opposition to truth. </p>
      <p>Your reputation is frail. Your &ldquo;true self,&rdquo; your character, is significantly more robust. Instead of spending time convincing others that we&rsquo;re this or that, we should be spending time becoming who we actually want to be. </p>
    </>
  },
  {
    title: "Talkin' Politics",
    date: "08/13/2020",
    image: "",
    url: "TalkinPolitics",
    tags: ["politics"],
    html: <>
      <p>So I thought I&rsquo;d write sort of a summary of my political beliefs because I intend to write about politics here. A disclaimer here: my political thoughts are not well-formed. I confess that I have many beliefs that I probably wouldn&rsquo;t be able to defend. Writing about them will hopefully sharpen them. </p>
      <p>Truth is what I&rsquo;m aiming at when it comes to beliefs. Assessment of a claim&rsquo;s truth (assuming it&rsquo;s not some logical or mathematical claim) demands probabilistic reasoning. Hardly any approach to nuanced topics is a catch-all, except maybe Bayesian reasoning in the form of &ldquo;<em>given we know (x<sub>1</sub>, &hellip; ,x<sub>n</sub>), how likely is y?&rdquo; </em>This is the paradigm of reasoning I try to use, and I think most people ought to use. For example, &ldquo;<em>given we know the state has executed innocent people before, should we keep the death penalty around?&rdquo; </em>is a sort of Bayesian inquiry I&rsquo;d like to explore.</p>
      <p>Anyway, a <em>super </em>brief summary of my politics:</p>
      <p>I lean libertarian when it comes to economic policies, and probably even more libertarian when it comes to social policies. I am generally a fan of free markets, despite <a href="https://slatestarcodex.com/2017/02/22/repost-the-non-libertarian-faq/">some of the problems that arise when you scale them</a>. </p>
      <p>Laws are fundamentally moral claims. &ldquo;Don&rsquo;t do X, or else you receive punishment Y&rdquo; is the form most laws take, which means the government has deemed those actions X to have <em>some </em>moral reprehensibility. To me, this means the government <em>ought </em>to hold a secular morality (ie separate church &amp; state). When we talk about large-scale moral issues like COVID, I am mostly <a href="https://en.wikipedia.org/wiki/Utilitarianism">utilitarian</a>. When our scope narrows (eg individual ethical decisions), my ethical beliefs become more <a href="https://en.wikipedia.org/wiki/Kantian_ethics">deontological</a>.</p>
      <p>When we talk about policies on a scale the magnitude of the US, dogma will destroy any type of rational conversation. Political identity makes you stupid. Adopting beliefs in packages almost always results in trouble. When you adopt an attractive package (maybe a set of empathic-looking beliefs coming from the far left), you have a poor understanding of <em>why </em>you believe some of the beliefs in that package. Wrapping up your identity with a set of beliefs means if one of those beliefs is criticized, your ego gets clipped and starts to cause trouble. (I know this because I experience it firsthand; it isn&rsquo;t easy to keep identity out of things)</p>
      <hr />
      <p>I acknowledge I haven&rsquo;t really said anything controversial here. The intent of this post was to expose my current biases and provide a summary of my beliefs for a historical record. As we near the election in November, I do intend to make bolder claims and maybe some predictions about the future so they&rsquo;re written down publicly and I can look back and see where my reasoning went wrong. </p>
      <p />
    </>
  },
  {
    title: "Changing a Large System",
    date: "08/11/2020",
    image: "",
    url: "ChangingLargeSystem",
    tags: ["systems"],
    html: <>
      <p>Productive conversations are rarely about large topics like &ldquo;society&rdquo; or &ldquo;the economy.&rdquo; My least favorite is &ldquo;the system&rdquo; in reference to society as a whole. It&rsquo;s hard to shift conversations that have this type of orbital perspective of the world to a more pointed conversation about tangible problems or potential solutions. If we try to solve the whole world&rsquo;s problems, we&rsquo;re doomed to fail. I sympathize with the sentiment &ldquo;the system is f***ed, man.&rdquo; It totally is. There are flaws <em>everywhere </em>when I look around at &ldquo;the system.&rdquo; Channeling the dissatisfaction with the status quo toward something specific has proved useful to me; undirected dissatisfaction will consume you.</p>
      <p>When you&rsquo;re trying to change a large system, learn more about it. What makes it flawed? What are its constituent parts? I&rsquo;ve recently been thinking about the public education system in America. It&rsquo;s way too big a system to just go and <em>change </em>it. But as I dig into the lower levels I learn that some parts of the system are more malleable than others. </p>
      <p>The lower you go in a large &amp; robust system, the more you can change it. To make effective changes at higher levels, the more expertise about the system is required. This is how the &ldquo;corporate ladder&rdquo; works: employees who demonstrate knowledge and competency in the company tend to get promoted and subsequently given more agency to change the company. </p>
      <p>So start small. Don&rsquo;t declare war against the entire system. You&rsquo;re right, it&rsquo;s hugely flawed, but you&rsquo;re picking a battle that you simply can&rsquo;t and won&rsquo;t win. The only options you have are complaining about it or burning it all to the ground. </p>
      <p />
    </>
  },
  {
    title: "A School for the Curious Builders",
    date: "08/06/2020",
    image: "CuriousBuildersSchool.jpg",
    url: "CuriousBuildersSchool",
    tags: ["education", "thought experiment"],
    html: <>
      <p>You walk in at 9am. You check the events board. There are 3 lectures scheduled for the day. One is with a physicist from the microfabrication company nearby who&rsquo;s going to lecture about the promises of nanotechnology. One is with an evolutionary biologist from the nearby university, and she brought octopi you&rsquo;ll be able to hold! And at the end of the day, a local jazz musician will be giving a concert and talking about the importance of practice.</p>
      <p>You decide to attend the microfabrication one, but that&rsquo;s in 2 hours, so you head to the library to log into The Forum, the online space for projects in the school, idea boards, discussion boards, and your favorite school book club. You&rsquo;ve been working on a rebuttal to your friend Carter&rsquo;s anarcho-capitalist post from yesterday, so you hop on a beanbag in the library and start writing. You decide to look around for Milton Friedman&rsquo;s&nbsp;<em>Why Government is the Problem&nbsp;</em>to better understand Carter&rsquo;s view; it&rsquo;s not in the library, but that&rsquo;s fine, you just order it online with your student book allotment. You have $245 left for the semester.&nbsp;</p>
      <p>You wrap up writing around 10:40, almost done with the forum post - gotta get front row seats to the lecture. Karina joins you (she never misses a lecture) just before it starts. The physicist introduces himself, says the usual &ldquo;I wish&nbsp;<em>I&nbsp;</em>came to this school when I was y&rsquo;all&rsquo;s age!&rdquo; He gives a decent lecture about his company&rsquo;s nanofabrication work (they make biosensors), and is wrapping up with how nanotechnology will&nbsp;<em>change the world&nbsp;</em>when a novel idea strikes you for an elegant drone design. You get the antsy feeling that you don&rsquo;t get very often. &ldquo;Yo, I gotta go,&rdquo; you say to Karina as you politely sneak your way out before the lecture ends.&nbsp;</p>
      <p>You check the chem lab to see if your avionics-savvy friend Jose is there (for the past few weeks he&rsquo;s been trying to recreate Tesla&rsquo;s open source battery). He is, and without explanation you walk up to the wall next to him (oh yeah, the entire school is lined with whiteboards) and start drawing the design you imagined.&nbsp;</p>
      <p>&ldquo;Well hey friend,&rdquo; he says when he notices you.&nbsp;</p>
      <p>&ldquo;I had an idea in the lecture this morning,&rdquo; you say, &ldquo;it&rsquo;s a drone.&rdquo;&nbsp; &nbsp;</p>
      <p>&ldquo;Hey, that looks pretty cool...&rdquo; Jose says as you draw. He frowns, squints at your drawing, then smirks. &ldquo;That might just work,&rdquo; he says.&nbsp;</p>
      <p>You two head to the computer lab to start modeling. The lab has three-monitor setups with powerful computers running Ubuntu of course. You guys walk past the embedded systems area with Raspberry Pis strewn about, past the circuit boards and soldering station, past the compromised server people use to practice hacking, and finally to the corner you both know well. This is where the magic happens.</p>
      <p>Since the school doesn&rsquo;t close, you two stay there until around 8pm drafting the rotors and body of the drone on AutoCAD. You take your flash drive with the models over to the 3D printers in the fabrication lab and start the printing process. &ldquo;See you here in the morning?&rdquo; you say to Jose. &ldquo;Yeah,&rdquo; he says, &ldquo;I&rsquo;ll probably go sleep and come back around 5 or 6. Hopefully we can try to fly this thing by tomorrow night! See ya.&rdquo;</p>
      <p>You stay for another hour watching the 3D printer go back and forth as it constructs what was just an idea this morning.&nbsp;</p>
      <p>&mdash;&mdash;&mdash;</p>
      <p>No grades, no formal classes, everything is optional. There are few staff, mostly to mentor or counsel. They also know the ins and outs of the equipment, so they&rsquo;re there for that too. But otherwise, the kids are free to roam and do what they please. I guess there&rsquo;s a nurse and a counselor for health. There are kitchen staff too, 3 meals a day.&nbsp;</p>
      <p>The school&rsquo;s mission is to encourage exploration. Everything is there to be utilized in the pursuit of knowledge. The school is centered around&nbsp;<em>doing&nbsp;</em>and&nbsp;<em>building.&nbsp;</em>Running an experiment is the unrivaled method of gaining knowledge. Real conversations are encouraged, because ideas are meant to be discussed and tested. The lectures are there to inspire, and they&rsquo;re never required. If you&rsquo;re interested, show up.&nbsp;</p>
      <p>This is the school of my dreams. I have no guess about the feasibility of this idea. It could turn out that in practice it&rsquo;s the same as our current ideas for flying cars: mostly impractical. But it&rsquo;s fun to theorize, just like it&rsquo;s fun to theorize what an anarchocapitalist society might look like. It&rsquo;s a thought experiment - if you could design an education system&nbsp;<em>completely&nbsp;</em>from the ground up, what would it look like?&nbsp;</p>
    </>
  },
  {
    title: "Introduction to Predictive Processing",
    date: "07/18/2020",
    image: "IntroToPP.jpg",
    url: "IntroToPP",
    tags: ["predictive processing", "neuroscience", "learn"],
    html: <>
      <p>I&rsquo;ve recently been more excited about a scientific idea than I&rsquo;ve ever seen before, and that&rsquo;s predictive processing. The general idea is relatively simple, but the implementation seems really complex. It seems to be a holistic theory of what the brain is doing, at a level of complexity that seems about right. Predictive processing seems to be right in the middle of <em>what neurons are doing </em>and <em>what the temporal lobe is for </em>in terms of complexity, which gives us room to move up and down those layers in this framework. It&rsquo;s also fundamentally computational in nature, which is attractive to me because I have a bias for the idea that <a href="https://www.edge.org/response-detail/26733">everything is computation.</a></p>
      <p>The basic idea of predictive processing is this: what we <em>perceive</em> is a computational reconciliation between a &ldquo;top-down&rdquo; stream of information and a &ldquo;bottom-up&rdquo; stream of sensory information. This is what we&rsquo;re going to attempt to unpack. </p>
      <p>Let&rsquo;s start with the bottom-up stream. This stream is comprised of both our outer senses (i.e. vision, hearing, etc.) and our interoceptive senses, which just means information about our body&rsquo;s internal state. This can include a sense of hunger, info about our own blood sugar, a sense of where our limbs are in relation to the rest of the body, etc. So our brains are constantly getting multiple &ldquo;input&rdquo; streams, from a variety of sources, at once.</p>
      <p>The top-down stream of information is made up of concepts encoded in our prior experience. This stream can be thought of as a constant stream of <em>predictions </em>about what the bottom-up sensory stream is going to look like next. </p>
      <p><strong>Prediction Error Minimization</strong></p>
      <p>Where the streams meet, a computation occurs. According to predictive processing, a comparison is made between what was predicted by the top-down stream and the actual sensory information. </p>
      <blockquote>
        <p>Mismatches between predictions and actual sensory input are not used passively to form percepts, but only to inform&nbsp;<em>updates</em>&nbsp;of representations which have already been created (thereby anticipating, to the extent possible, incoming sensory signals). The goal of these updates is to&nbsp;<em>minimize</em>&nbsp;the&nbsp;<em>prediction error</em>&nbsp;resulting from the prediction (feature #5,&nbsp;<strong>Prediction Error Minimization</strong>&nbsp;<strong>(PEM)</strong>), in such a way that updates conform to the norms of&nbsp;<strong>Bayesian Inference </strong>[1]</p></blockquote>
      <p>Alright, hopefully this isn&rsquo;t too overwhelming. If it helps, think about the top-down stream of information as your expectations, and when the top-down can&rsquo;t match the bottom-up, the experience is one of confusion. I hesitate to use such imprecise words as &ldquo;confusion&rdquo; and &ldquo;expectation,&rdquo; but I think it&rsquo;s useful here. Imagine you take a drink of vodka expecting it to be water, the brief experience of confusion there is intense and unpleasant, and your knowledge of the world is very quickly updated as you spit it out. </p>
      <p>These error minimization computations happen hierarchically. At every level, the two streams meet to try to resolve any error. In the case of water-but-expecting-vodka, at the lowest level, a prediction of the taste of water streams in from above. When the prediction is compared with the actual sensory signal, that level says to the one above, &ldquo;We got it <em>way </em>off. See what <em>you </em>can do.&rdquo; So that level tries to resolve the error, gets it way off, and levels of the hierarchy keep relaying it to different levels to attempt to resolve the error. I think this is a great segue into how <em>action </em>is incorporated into predictive processing. </p>
      <p><strong>Action</strong></p>
      <p>Fundamentally, there are only two ways an organism can resolve prediction error. One is internally, by continually searching for a prediction that better fits the sensory signals. The other is by changing the sensory signals to fit the prediction. As agents capable of movement, we are able to alter our sensory signals through action. In the previous example, this is equivalent to resolving error by spitting out the vodka. </p>
      <p>Here, &ldquo;action&rdquo; doesn&rsquo;t have to mean interaction with the external world. We mentioned interoceptive signals earlier, and these can be altered by &ldquo;action&rdquo; in interesting ways, too. Let&rsquo;s say your brain gets word that your blood sugar is low. Your perception is a craving for sugary things, and your brain has two options to resolve the error: 1) eat a sugary thing (interaction w/ the external world) or 2) metabolize fat stores (interaction w/ internal bodily functions) [1].</p>
      <p>This has an interesting implication:</p>
      <blockquote>
        <p>In short, the error between sensory signals and predictions of sensory signals (derived from internal estimates) can be minimized by changing internal estimates and by changing sensory signals (through action). What this suggests is that the same internal representations which become active in perception can also be deployed to enable action. This means that there is not only a common data-format, but also that at least some of the representations that underpin perception are numerically identical with representations that underpin action.</p></blockquote>
      <p>This is called the <em>Ideomotor Principle. </em>In this model, action and perception have the same neural representation. I don&rsquo;t fully understand this idea yet, but I don&rsquo;t think it&rsquo;s necessary to dive into for this introduction. </p>
      <p><strong>Explanatory</strong></p>
      <p>I am attracted to this theory because it seems to have such explanatory power, at least regarding many things related to our conscious experience. Attention, for example, is explained as &ldquo;the process of optimizing precision estimates.&rdquo; [1] Makes sense. We become pretty certain pretty quickly about whatever our attention is on. There&rsquo;s also explanations for cognitive diseases like schizophrenia (too much trust in top-down prediction) and autism (overwhelming flows of bottom-up information). Dreaming can be explained as the interaction of concepts in your body of top-down knowledge in the absence of bottom-up information to correct error with. Placebo results have a good explanation through this lens: if we expect less pain, our brain will smooth the noisy pain signals, assuming they are partly a mistake. </p>
      <p>Models of the world are only as good as they are explanatory/predictive. Predictive processing is the most accurate model of brain computation I&rsquo;ve ever learned about, so I&rsquo;ll be diving deeper into it and sharing more of what I find. Descriptions of the brain in terms of action potentials or brain lobes have left me unsatisfied. When trying to answer the question, &ldquo;What is the brain <em>doing</em>?&rdquo; a computational model seems most apt. </p>
      <p>If you want to know more, definitely check out the source I pulled most of this info from below. And if this stuff fascinates you like it does me, check out the book <a href="https://smile.amazon.com/Surfing-Uncertainty-Prediction-Action-Embodied/dp/0190217014/ref=as_sl_pc_as_ss_li_til?tag=slatestarcode-20&amp;linkCode=w00&amp;linkId=ea349ba693098475bf8beb5373871ee4&amp;creativeASIN=0190217014">Surfing Uncertainty</a> by Andy Clark.</p>
      <p>[1] <a href="https://predictive-mind.net/papers/vanilla-pp-for-philosophers-a-primer-on-predictive-processing">https://predictive-mind.net/papers/vanilla-pp-for-philosophers-a-primer-on-predictive-processing</a></p>
      <p />
    </>
  },
  {
    title: "Booting Up",
    date: "07/17/2020",
    image: "BootingUp.jpg",
    url: "BootingUp",
    tags: [],
    html: <>

      <p>Hello, world!</p>
      <p>In Lieu of U is a knowledge project of mine, centered around my interests and explorations during a semester off from college. </p>
      <p>I&rsquo;m Kam, a college student with a nasty case of curiosity. I&rsquo;ll be sharing my learning here and who I&rsquo;m talking to on my podcast. My interests mostly concern the natural world and what we can know about it; my current interests (subject to change) include computing, neuroscience, and statistics. I&rsquo;ll be trying to answer questions like:</p>
      <ul>
        <li>
          <p>What are the constraints our human biology impose? </p></li>
        <li>
          <p>What are the limits of our technology at the moment? Nanotechnology, materials, computing?</p></li>
        <li>
          <p>What is our brain doing, computationally?</p></li>
        <li>
          <p>How can we merge with robots smoothly? Where might the hiccups be?</p></li>
        <li>
          <p>Why is public education so bad?</p></li>
        <li>
          <p>Are these even the right questions?</p></li></ul>
      <p>These are just some of the things that fascinate me. I am doing this project for myself, but of course I invite everyone to come along and share in the exploration. It should be fun. The fundamental value of this website is the pursuit of truth in good faith. I intend to add comment sections for this website, but at the moment I just want to ship.</p>
      <p>For those curious, this is why this website exists:</p>
      <p>I am frustrated with the education I&rsquo;m receiving at university, so I am taking a year off to see what kind of education I can design for myself. In Lieu of U is a key part of that education. I hope exposing my creations to criticism will sharpen my thinking and enable me to find truth more efficiently over time. I am posting here to report on my findings, to make public the conversations with the people I meet, and to share the resources I find along the way. Hopefully it&rsquo;s useful. </p>
      <p />
    </>
  },
  {
    title: "Placebo Neuroscience",
    date: "06/25/2020",
    image: "PlaceboNeuroscience.jpg",
    url: "PlaceboNeuroscience",
    tags: ["neuroscience"],
    html: <>
      <p>Let me start by saying that the placebo effect is likely exaggerated, and almost certainly clinically
      insignificant. <a href="http://www.nejm.org/doi/full/10.1056/NEJM200105243442106">A study</a> done by
                      Hróbjartsson
                      and Gøtzsche (plus two followup studies) assessed 114 studies and “found little evidence in general that
                      placebos
      had powerful clinical effects.” The <em>why </em>behind this is discussed at length by Scott Alexander in <a
          href="https://slatestarcodex.com/2018/01/31/powerless-placebos/">Powerless Placebos</a>, but I wanted to
address
the exception that was encountered in that study: “the 27 trials involving the treatment of pain (including a
total
      of 1602 patients) showed a significant effect of placebo as compared with no treatment.” </p>
      <p>Why might this be the case?</p>
      <p>A quick brief of some key related parts of the brain is needed for this proposed explanation. First, the
        amygdala,
        that outdated piece of hardware in your “monkey brain” limbic system. Fear center, aggression, anxiety, yada
        yada,
        you know the deal. The amygdala receives reliable news from an ancient part of the brainstem, the
        periaqueductal
        gray (henceforth PAG). The PAG modulates pain, so when you prick your finger, it screams to the amygdala to do
        something about it. The amygdala then relays the news to the dorsal anterior cingulate (dACC) which accounts
        for
      your <em>affective </em>experience of the pain, the unpleasantness. We’re almost certain of this; in 1961
                      Eldon
      Foltz and Lowell White <a href="https://thejns.org/view/journals/j-neurosurg/19/2/article-p89.xml">took
                        people's
        dACC out</a> and they could report the intensity of pain but are no longer bothered by it. </p>
      <p><em>Onto the cortex!</em></p>
      <p>The cortex as you know is the most recently evolved part of the brain, and it’s got a lot of control over the
        choices we make (we’re pretty sure this is where the sense of self lives). As a complete shock to absolutely
        no one,
        a lot of our behaviors are completely irrational. Our frontal cortex has an area where it is highly connected
        to our
        limbic system (which includes the amygdala!), and it is here where those pesky emotions seep into our decision
        making process. This place is called the ventromedial prefrontal cortex (henceforth vmPFC, very e(m)otional
        PFC to
      remember). </p>
      <p>On the opposite end of the spectrum, the most rational, calculating, deliberative part of the prefrontal
        cortex is
        the dorsolateral prefrontal cortex (henceforth dlPFC, deliberative to remember). When you’re really thinking
        hard,
        the dlPFC is where all of the factors you’re taking into account coalesce. It’s important to remember that the
        brain
        is highly parallel, meaning at the same time you’re rationally calculating how many skittles are in a jar,
        your
        limbic system is anticipating what it’d feel like to win that $50 gift card to Applebee’s if you guess
        correctly.
    </p>
      <p>All of these parts of the brain are connected to each other to more and less degrees. But here’s the thesis
        of this
      post: <strong>our thinking brain (i.e. the cortex) can inhibit the pain-processing part of our brain.</strong>
        This
      is the basis of the pain exception in the placebo analysis. </p>
      <p><a href="https://www.sciencedirect.com/science/article/pii/S1053811904000527">In this study</a>, Matthew
        Lieberman
        placebo’d a group of poor souls with irritable bowel syndrome. Lieberman showed increased activity in the
        right
        ventro-lateral PFC and the dlPFC and decreased activity in the amygdala and dACC alongside a (small but
        significant)
      decrease in self-reported symptoms and pain. </p>
      <p>So that’s pretty cool! It certainly could provide some kind of insight into what’s going on in the brains of
      <a href="https://www.youtube.com/watch?v=VOzckvynDPw">freaks like David Blaine</a> who can seem to withstand
                      ridiculous amounts of pain without flinching. I cede any further explanation to other fields like psychology
                      or
                      cognitive behavioral science, because even though my recent fascination with neuroscience has provided me a
                      lot of
                      insight into what’s going on under-the-hood, it feels like a trap to think “everything is explainable by
      neuroscience.” It’s just one of many cool lenses to view the world through.</p>
      <p></p>
      <p></p>
      <p>
      </p>
      <p>&nbsp;</p>
    </>,
  },
];

export default blogposts;
