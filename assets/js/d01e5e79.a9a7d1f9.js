"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[9691],{6386:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"guide/Control_Flow/Rock_Paper_Scissors","title":"Building a Rock, Paper, Scissors Game in Python","description":"In this tutorial, we will create a classic game of Rock, Paper, Scissors in Python. This project will incorporate basic artificial intelligence to simulate an opponent. The steps outlined will guide you through setting up the game, handling user input, implementing game logic, and displaying the results. Additionally, we will suggest a bonus assignment to further enhance your Python skills.","source":"@site/docs/guide/02_Control_Flow/07_Rock_Paper_Scissors.md","sourceDirName":"guide/02_Control_Flow","slug":"/guide/Control_Flow/Rock_Paper_Scissors","permalink":"/Python/docs/guide/Control_Flow/Rock_Paper_Scissors","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/02_Control_Flow/07_Rock_Paper_Scissors.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"else Block in for and while Loops","permalink":"/Python/docs/guide/Control_Flow/Loop-Else"},"next":{"title":"Functions","permalink":"/Python/docs/category/functions"}}');var o=s(4848),r=s(8453);const t={},a="Building a Rock, Paper, Scissors Game in Python",l={},c=[{value:"Step 1: Import Required Libraries",id:"step-1-import-required-libraries",level:2},{value:"Step 2: Define Game Elements",id:"step-2-define-game-elements",level:2},{value:"Step 3: Display Welcome Message",id:"step-3-display-welcome-message",level:2},{value:"Step 4: Main Game Loop",id:"step-4-main-game-loop",level:2},{value:"Step 5: Run and Test the Game",id:"step-5-run-and-test-the-game",level:2},{value:"Bonus Assignment: Adding a Scoring System",id:"bonus-assignment-adding-a-scoring-system",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"building-a-rock-paper-scissors-game-in-python",children:"Building a Rock, Paper, Scissors Game in Python"})}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will create a classic game of Rock, Paper, Scissors in Python. This project will incorporate basic artificial intelligence to simulate an opponent. The steps outlined will guide you through setting up the game, handling user input, implementing game logic, and displaying the results. Additionally, we will suggest a bonus assignment to further enhance your Python skills."}),"\n",(0,o.jsx)(n.h2,{id:"step-1-import-required-libraries",children:"Step 1: Import Required Libraries"}),"\n",(0,o.jsxs)(n.p,{children:["We will use Python's ",(0,o.jsx)(n.code,{children:"random"})," library to enable the AI to make random choices. We will also use the ",(0,o.jsx)(n.code,{children:"sys"})," library to handle program termination."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import random\nimport sys\n"})}),"\n",(0,o.jsx)(n.h2,{id:"step-2-define-game-elements",children:"Step 2: Define Game Elements"}),"\n",(0,o.jsx)(n.p,{children:"First, we define the available moves and their corresponding emoji representations. Emojis are optional, and you can use simple text representations instead."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Dictionary to store moves and their emoji representations\nmoves = {\n    "rock": "\ud83e\udea8",\n    "paper": "\ud83d\udcc4",\n    "scissors": "\u2702\ufe0f"\n}\n\n# List of valid moves\nvalid_moves = list(moves.keys())\n'})}),"\n",(0,o.jsx)(n.h2,{id:"step-3-display-welcome-message",children:"Step 3: Display Welcome Message"}),"\n",(0,o.jsx)(n.p,{children:"We will display a welcome message to the user."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'print("Welcome to Rock, Paper, Scissors!")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"step-4-main-game-loop",children:"Step 4: Main Game Loop"}),"\n",(0,o.jsx)(n.p,{children:"We will create an infinite loop that repeatedly asks the user for their move until they decide to exit the game."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'while True:\n    user_move = input("Choose rock, paper, or scissors: ").lower()\n  \n    # Exit condition\n    if user_move == "exit":\n        print("Thanks for playing!")\n        sys.exit()\n  \n    # Check for valid move\n    if user_move not in valid_moves:\n        print("Invalid move. Please choose rock, paper, or scissors.")\n        continue\n  \n    # AI move\n    ai_move = random.choice(valid_moves)\n  \n    # Display moves\n    print("-" * 10)\n    print(f"You: {moves[user_move]}")\n    print(f"AI: {moves[ai_move]}")\n    print("-" * 10)\n  \n    # Determine winner\n    if user_move == ai_move:\n        print("It is a tie!")\n    elif (user_move == "rock" and ai_move == "scissors") or \\\n         (user_move == "scissors" and ai_move == "paper") or \\\n         (user_move == "paper" and ai_move == "rock"):\n        print("You win!")\n    else:\n        print("AI wins!")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"step-5-run-and-test-the-game",children:"Step 5: Run and Test the Game"}),"\n",(0,o.jsx)(n.p,{children:'To test the game, run the script and interact with it by entering various moves such as "rock," "paper," and "scissors." Ensure that the game responds correctly and identifies the winner or if it\'s a tie.'}),"\n",(0,o.jsx)(n.h2,{id:"bonus-assignment-adding-a-scoring-system",children:"Bonus Assignment: Adding a Scoring System"}),"\n",(0,o.jsx)(n.p,{children:"To make the game more engaging, add a scoring system that keeps track of the number of wins for both the user and the AI."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Initialize Score Variables"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"user_score = 0\nai_score = 0\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Update Scores"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"Modify the winner determination section to update the scores accordingly."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'if user_move == ai_move:\n    print("It is a tie!")\nelif (user_move == "rock" and ai_move == "scissors") or \\\n     (user_move == "scissors" and ai_move == "paper") or \\\n     (user_move == "paper" and ai_move == "rock"):\n    print("You win!")\n    user_score += 1\nelse:\n    print("AI wins!")\n    ai_score += 1\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Display Scores"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"After each round, display the current scores."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'print(f"Score -> You: {user_score}, AI: {ai_score}")\n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(6540);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);