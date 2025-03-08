"use strict";(self.webpackChunkpython=self.webpackChunkpython||[]).push([[9225],{7878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"python-guide/Unit-Testing/Conftest","title":"Using conftest.py in Pytest","description":"Overview","source":"@site/docs/python-guide/14_Unit-Testing/03_Conftest.md","sourceDirName":"python-guide/14_Unit-Testing","slug":"/python-guide/Unit-Testing/Conftest","permalink":"/Python/docs/python-guide/Unit-Testing/Conftest","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python-guide/14_Unit-Testing/03_Conftest.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"guideSidebar","previous":{"title":"Using Fixtures in Pytest","permalink":"/Python/docs/python-guide/Unit-Testing/Fixtures"},"next":{"title":"Marks","permalink":"/Python/docs/python-guide/Unit-Testing/Marks"}}');var i=t(4848),a=t(8453);const r={},l="Using conftest.py in Pytest",o={},d=[{value:"Overview",id:"overview",level:2},{value:"Pytest Configuration with <code>conftest.py</code>",id:"pytest-configuration-with-conftestpy",level:2},{value:"Sample Module",id:"sample-module",level:3},{value:"Sample Module Code",id:"sample-module-code",level:3},{value:"Creating <code>conftest.py</code>",id:"creating-conftestpy",level:3},{value:"Step-by-Step Implementation",id:"step-by-step-implementation",level:4},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Step-by-Step Implementation",id:"step-by-step-implementation-1",level:4},{value:"Running the Tests",id:"running-the-tests",level:3},{value:"Explanation of Results",id:"explanation-of-results",level:3},{value:"Detailed Breakdown",id:"detailed-breakdown",level:3},{value:"Advantages of Using <code>conftest.py</code>",id:"advantages-of-using-conftestpy",level:3},{value:"Conclusion",id:"conclusion",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsxs)(n.h1,{id:"using-conftestpy-in-pytest",children:["Using ",(0,i.jsx)(n.code,{children:"conftest.py"})," in Pytest"]})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial will focus on the ",(0,i.jsx)(n.code,{children:"conftest.py"})," file in Pytest, which allows for the creation of common functionalities shared between tests. We will provide a detailed and precise example to demonstrate its practical usage."]}),"\n",(0,i.jsxs)(n.h2,{id:"pytest-configuration-with-conftestpy",children:["Pytest Configuration with ",(0,i.jsx)(n.code,{children:"conftest.py"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"conftest.py"})," file is a special configuration file in Pytest that allows you to define fixtures, hooks, and other configuration options shared across multiple test files. Pytest automatically detects this file and uses the configurations within it."]}),"\n",(0,i.jsx)(n.h3,{id:"sample-module",children:"Sample Module"}),"\n",(0,i.jsx)(n.p,{children:"For this example, we will use a sample module with two functions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"reverse_text"}),": Reverses a string after ensuring the input is of type string."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"get_api_data"}),": Simulates an API call to fetch data."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"sample-module-code",children:"Sample Module Code"}),"\n",(0,i.jsxs)(n.p,{children:["Create a file named ",(0,i.jsx)(n.code,{children:"sample_module.py"})," with the following content:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# sample_module.py\n\ndef reverse_text(text):\n    if not isinstance(text, str):\n        raise TypeError("Input must be a string")\n    return text[::-1]\n\ndef get_api_data():\n    # Simulate a network call to fetch data\n    return "original data"\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"creating-conftestpy",children:["Creating ",(0,i.jsx)(n.code,{children:"conftest.py"})]}),"\n",(0,i.jsxs)(n.p,{children:["Next, create a file named ",(0,i.jsx)(n.code,{children:"conftest.py"})," in the same directory as your test files. This file will define fixtures to be used across multiple test files."]}),"\n",(0,i.jsx)(n.h4,{id:"step-by-step-implementation",children:"Step-by-Step Implementation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Import Necessary Modules"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# conftest.py\nimport pytest\nimport sample_module as sm\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Defining Fixtures"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Unsorted Numbers Fixture"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"This fixture returns a list of unsorted integers."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"@pytest.fixture\ndef sample_numbers_unsorted():\n    return [-1, 3, 2, 1, 0]\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"API Data Disabling Fixture"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["This fixture will monkey-patch the ",(0,i.jsx)(n.code,{children:"get_api_data"})," function to return mock data instead of making a real network call. The ",(0,i.jsx)(n.code,{children:"autouse=True"})," parameter ensures that this fixture is used automatically in all tests."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'@pytest.fixture(autouse=True)\ndef disable_api_data(monkeypatch):\n    def mock_get_api_data():\n        return "modified data"\n    monkeypatch.setattr(sm, "get_api_data", mock_get_api_data)\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"writing-tests",children:"Writing Tests"}),"\n",(0,i.jsxs)(n.p,{children:["Create a test file named ",(0,i.jsx)(n.code,{children:"test_sample_module.py"})," to write tests for the sample module functions using the fixtures defined in ",(0,i.jsx)(n.code,{children:"conftest.py"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"step-by-step-implementation-1",children:"Step-by-Step Implementation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Importing Necessary Modules"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# test_sample_module.py\nimport sample_module as sm\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Testing API Data Function"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["This test verifies that the ",(0,i.jsx)(n.code,{children:"get_api_data"})," function returns the mocked data."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def test_api_returns_data():\nactual = sm.get_api_data()\nexpected = "modified data"\nassert actual == expected, f"Expected {expected} but got {actual}"\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Testing Reverse Text Function"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["This test checks if the ",(0,i.jsx)(n.code,{children:"reverse_text"})," function correctly reverses a given string."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def test_reverse_text():\n    actual = sm.reverse_text("banana")\n    expected = "ananab"\n    assert actual == expected, f"Expected {expected} but got {actual}"\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"running-the-tests",children:"Running the Tests"}),"\n",(0,i.jsx)(n.p,{children:"To run the tests, navigate to the directory containing your test files and execute the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pytest\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explanation-of-results",children:"Explanation of Results"}),"\n",(0,i.jsx)(n.p,{children:"When running the tests:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"test_api_returns_data"})," function will use the monkey-patched ",(0,i.jsx)(n.code,{children:"get_api_data"}),' and assert that it returns "modified data".']}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"test_reverse_text"}),' function will check if the string "banana" is correctly reversed to "ananab".']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"detailed-breakdown",children:"Detailed Breakdown"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fixtures"}),":\nFixtures are used to provide a fixed baseline for tests, ensuring consistency and reducing redundancy. In ",(0,i.jsx)(n.code,{children:"conftest.py"}),", the ",(0,i.jsx)(n.code,{children:"disable_api_data"})," fixture monkey-patches the ",(0,i.jsx)(n.code,{children:"get_api_data"})," function to return mock data, which avoids the need for actual network calls during testing."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Monkey-patching"}),":\nMonkey-patching involves dynamically modifying a module or class at runtime. This is particularly useful in testing scenarios where you want to replace certain functionalities with mock implementations."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Autouse Fixtures"}),":\nThe ",(0,i.jsx)(n.code,{children:"autouse=True"})," parameter in the fixture definition makes the fixture automatically applied to all tests, removing the need to explicitly include it in the test function parameters."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"advantages-of-using-conftestpy",children:["Advantages of Using ",(0,i.jsx)(n.code,{children:"conftest.py"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Centralized Configuration"}),":\nCommon fixtures and configurations are centralized, reducing redundancy and making it easier to manage shared setups."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scalability"}),":\nAs the test suite grows, ",(0,i.jsx)(n.code,{children:"conftest.py"})," allows for easy addition of new fixtures and configurations without modifying individual test files."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Maintainability"}),":\nBy defining reusable fixtures, the codebase remains clean and maintainable, with fewer chances of errors due to duplicated setup code."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"conftest.py"})," in Pytest provides a powerful way to manage common test setups and configurations. By following this tutorial, you can leverage ",(0,i.jsx)(n.code,{children:"conftest.py"})," to create reusable and maintainable test fixtures, ensuring efficient and scalable test management for your projects. This approach is particularly beneficial for large test suites where shared functionalities are crucial for maintaining consistency and reducing redundancy."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);