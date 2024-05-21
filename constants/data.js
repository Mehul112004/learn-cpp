export const learn = [
  {
    title: "Introduction",
    description:
      "C++ is a general-purpose, high-performance programming language. It was developed by Bjarne Stroustrup at Bell Labs starting in 1979. C++ is an extension of the C programming language, adding features such as classes, objects, and exceptions.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}`,
      explanation:
        "This is a simple C++ program that prints 'Hello, World!' to the console.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Wikipedia",
        url: "https://en.wikipedia.org/wiki/C%2B%2B",
      },
      {
        type: "book",
        title: "The C++ Programming Language by Bjarne Stroustrup",
        author: "Bjarne Stroustrup",
      },
    ],
    quiz: {
      question: "Who developed C++?",
      options: [
        "James Gosling",
        "Bjarne Stroustrup",
        "Dennis Ritchie",
        "Guido van Rossum",
      ],
      answer: "Bjarne Stroustrup",
    },
  },
  {
    title: "Variables and Data Types",
    description:
      "In C++, variables are used to store data, and data types specify what kind of data can be stored in a variable. Common data types include int, float, double, char, and bool.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    int age = 25;\n    float height = 5.9;\n    char initial = 'A';\n    bool isStudent = true;\n\n    std::cout << "Age: " << age << "\\n";\n    std::cout << "Height: " << height << "\\n";\n    std::cout << "Initial: " << initial << "\\n";\n    std::cout << "Is student: " << isStudent << "\\n";\n    return 0;\n}`,
      explanation:
        "This code declares and initializes variables of different data types and prints them.",
    },
    resources: [
      {
        type: "link",
        title: "C++ Data Types",
        url: "https://www.tutorialspoint.com/cplusplus/cpp_data_types.htm",
      },
      {
        type: "book",
        title:
          "Programming: Principles and Practice Using C++ by Bjarne Stroustrup",
        author: "Bjarne Stroustrup",
      },
    ],
    quiz: {
      question:
        "Which of the following is a correct declaration of a float variable?",
      options: [
        "float height = 5.9;",
        "int height = 5.9;",
        "char height = 5.9;",
        "bool height = 5.9;",
      ],
      answer: "float height = 5.9;",
    },
  },
  {
    title: "Control Structures",
    description:
      "Control structures in C++ allow you to control the flow of the program. These include conditional statements (if, else, switch) and loops (for, while, do-while).",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    int number = 10;\n\n    // if-else statement\n    if (number > 0) {\n        std::cout << "The number is positive.\\n";\n    } else {\n        std::cout << "The number is not positive.\\n";\n    }\n\n    // for loop\n    for (int i = 0; i < 5; i++) {\n        std::cout << "i: " << i << "\\n";\n    }\n\n    return 0;\n}`,
      explanation:
        "This code demonstrates the use of an if-else statement and a for loop.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Control Structures",
        url: "https://www.learncpp.com/cpp-tutorial/35-the-if-statement/",
      },
      {
        type: "book",
        title: "C++ Primer by Stanley B. Lippman",
        author: "Stanley B. Lippman, Josée Lajoie, Barbara E. Moo",
      },
    ],
    quiz: {
      question:
        "Which control structure is used to repeat a block of code a certain number of times?",
      options: ["if-else", "switch", "for", "do-while"],
      answer: "for",
    },
  },
  {
    title: "Functions",
    description:
      "Functions in C++ allow you to group statements into a single unit that can be called from different parts of the program. Functions help in code reusability and modularity.",
    examples: {
      code: `#include <iostream>\n\n// Function declaration\nvoid greet() {\n    std::cout << "Hello, World!\\n";\n}\n\nint main() {\n    // Function call\n    greet();\n    return 0;\n}`,
      explanation:
        "This code defines a function named 'greet' that prints 'Hello, World!' and calls it from the main function.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Functions",
        url: "https://www.geeksforgeeks.org/functions-in-cpp/",
      },
      {
        type: "book",
        title: "Effective Modern C++ by Scott Meyers",
        author: "Scott Meyers",
      },
    ],
    quiz: {
      question: "What is the correct syntax for defining a function in C++?",
      options: [
        "void functionName() {}",
        "functionName() void {}",
        "void functionName {}",
        "functionName void() {}",
      ],
      answer: "void functionName() {}",
    },
  },
  {
    title: "Classes and Objects",
    description:
      "Classes and objects are fundamental concepts in C++ that support object-oriented programming. A class is a blueprint for creating objects, which are instances of classes.",
    examples: {
      code: `#include <iostream>\n\nclass Person {\npublic:\n    std::string name;\n    int age;\n\n    void introduce() {\n        std::cout << "Name: " << name << ", Age: " << age << "\\n";\n    }\n};\n\nint main() {\n    Person person1;\n    person1.name = "John";\n    person1.age = 30;\n    person1.introduce();\n\n    return 0;\n}`,
      explanation:
        "This code defines a class named 'Person' with attributes and a method, and creates an object of that class.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Classes and Objects",
        url: "https://www.cplusplus.com/doc/tutorial/classes/",
      },
      {
        type: "book",
        title: "C++ How to Program by Paul Deitel and Harvey Deitel",
        author: "Paul Deitel, Harvey Deitel",
      },
    ],
    quiz: {
      question: "What is a class in C++?",
      options: [
        "A blueprint for creating objects",
        "An instance of an object",
        "A type of function",
        "A variable",
      ],
      answer: "A blueprint for creating objects",
    },
  },
  {
    title: "Pointers and References",
    description:
      "Pointers and references are powerful features in C++ that allow you to directly access memory and pass variables by reference.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    int x = 10;\n    int* p = &x;\n    std::cout << "Value of x: " << x << "\\n";\n    std::cout << "Address of x: " << &x << "\\n";\n    std::cout << "Value of p: " << p << "\\n";\n    std::cout << "Value pointed by p: " << *p << "\\n";\n    return 0;\n}`,
      explanation:
        "This code demonstrates the use of pointers to access and manipulate memory.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Pointers and References",
        url: "https://www.cplusplus.com/doc/tutorial/pointers/",
      },
      {
        type: "book",
        title: "C++ Primer Plus by Stephen Prata",
        author: "Stephen Prata",
      },
    ],
    quiz: {
      question: "What does the '*' operator do in C++?",
      options: [
        "Multiplies two numbers",
        "Dereferences a pointer",
        "Creates a new variable",
        "None of the above",
      ],
      answer: "Dereferences a pointer",
    },
  },
  {
    title: "Standard Template Library (STL)",
    description:
      "The Standard Template Library (STL) is a powerful library in C++ that provides several generic classes and functions, including collections like vectors, lists, queues, and algorithms like sort, reverse, etc.",
    examples: {
      code: `#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> v = {4, 2, 9, 6, 5, 3};\n    std::sort(v.begin(), v.end());\n    for(int i : v) {\n        std::cout << i << " ";\n    }\n    return 0;\n}`,
      explanation:
        "This code demonstrates the use of the STL vector and sort function.",
    },

    resources: [
      {
        type: "link",
        title: "C++ STL",
        url: "https://www.cplusplus.com/reference/stl/",
      },
      {
        type: "book",
        title: "Effective STL by Scott Meyers",
        author: "Scott Meyers",
      },
    ],
    quiz: {
      question:
        "What is the correct way to declare a vector of integers in C++?",
      options: [
        "vector<int> v;",
        "int vector v;",
        "vector v<int>;",
        "v<int> vector;",
      ],
      answer: "vector<int> v;",
    },
  },
  {
    title: "Exception Handling",
    description:
      "Exception handling in C++ allows you to handle runtime errors in a controlled manner using the try, catch, and throw keywords.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    try {\n        throw "An error occurred!";\n    }\n    catch (const char* e) {\n        std::cout << e << "\\n";\n    }\n    return 0;\n}`,
      explanation:
        "This code demonstrates the use of try, catch, and throw for exception handling.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Exception Handling",
        url: "https://www.cplusplus.com/doc/tutorial/exceptions/",
      },
      {
        type: "book",
        title:
          "C++ Programming: From Problem Analysis to Program Design by D.S. Malik",
        author: "D.S. Malik",
      },
    ],
    quiz: {
      question: "Which keyword is used to throw an exception in C++?",
      options: ["throw", "catch", "try", "error"],
      answer: "throw",
    },
  },
  {
    title: "Syntax and Structure",
    description:
      "C++ has a specific syntax and structure that every programmer must follow. This includes the use of semicolons, brackets, and indentation.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!";\n    return 0;\n}`,
      explanation:
        "This is a basic C++ program. Note the use of semicolons and brackets.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Syntax",
        url: "https://www.w3schools.com/cpp/cpp_syntax.asp",
      },
      {
        type: "book",
        title: "C++ For Dummies by Stephen R. Davis",
        author: "Stephen R. Davis",
      },
    ],
    quiz: {
      question:
        "What is the purpose of the 'return 0;' statement in a C++ program?",
      options: [
        "It indicates that the program has run successfully.",
        "It causes the program to return to the beginning.",
        "It is used to return a value from a function.",
        "None of the above.",
      ],
      answer: "It indicates that the program has run successfully.",
    },
  },
  {
    title: "Operators",
    description:
      "Operators in C++ are symbols that perform operations on variables and values. These include arithmetic operators, comparison operators, logical operators, and more.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    int a = 10;\n    int b = 20;\n    std::cout << "a + b = " << a + b << "\\n";\n    return 0;\n}`,
      explanation:
        "This code demonstrates the use of the '+' operator to add two integers.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Operators",
        url: "https://www.w3schools.com/cpp/cpp_operators.asp",
      },
      {
        type: "book",
        title: "C++: The Complete Reference by Herbert Schildt",
        author: "Herbert Schildt",
      },
    ],
    quiz: {
      question: "What does the '==' operator do in C++?",
      options: [
        "Assigns a value to a variable.",
        "Compares two values for equality.",
        "Adds two values together.",
        "None of the above.",
      ],
      answer: "Compares two values for equality.",
    },
  },
  {
    title: "Input and Output",
    description:
      "C++ uses streams to perform input and output operations. The 'cin' and 'cout' objects are used for input and output respectively.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    std::string name;\n    std::cout << "Enter your name: ";\n    std::cin >> name;\n    std::cout << "Hello, " << name << "!\\n";\n    return 0;\n}`,
      explanation:
        "This code demonstrates the use of 'cin' for input and 'cout' for output.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Input/Output",
        url: "https://www.w3schools.com/cpp/cpp_input_output.asp",
      },
      {
        type: "book",
        title: "C++ Primer by Stanley B. Lippman",
        author: "Stanley B. Lippman, Josée Lajoie, Barbara E. Moo",
      },
    ],
    quiz: {
      question: "What is the purpose of the 'cin' object in C++?",
      options: [
        "It is used for input.",
        "It is used for output.",
        "It is used to store data.",
        "None of the above.",
      ],
      answer: "It is used for input.",
    },
  },
  {
    title: "Arrays",
    description:
      "An array in C++ is a collection of elements of the same type stored in contiguous memory locations.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    int numbers[] = {1, 2, 3, 4, 5};\n    for(int i = 0; i < 5; i++) {\n        std::cout << numbers[i] << " ";\n    }\n    return 0;\n}`,
      explanation:
        "This code declares an array of integers and prints each element.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Arrays",
        url: "https://www.w3schools.com/cpp/cpp_arrays.asp",
      },
      {
        type: "book",
        title: "C++ Programming in Easy Steps by Mike McGrath",
        author: "Mike McGrath",
      },
    ],
    quiz: {
      question: "How do you declare an array of integers in C++?",
      options: [
        "int numbers[];",
        "array<int> numbers;",
        "int[] numbers;",
        "numbers<int> array;",
      ],
      answer: "int numbers[];",
    },
  },
  {
    title: "Strings",
    description:
      "A string in C++ is an object of the 'string' class that represents a sequence of characters.",
    examples: {
      code: `#include <iostream>\n\nint main() {\n    std::string greeting = "Hello, World!";\n    std::cout << greeting << "\\n";\n    return 0;\n}`,
      explanation: "This code declares a string and prints it.",
    },

    resources: [
      {
        type: "link",
        title: "C++ Strings",
        url: "https://www.w3schools.com/cpp/cpp_strings.asp",
      },
      {
        type: "book",
        title:
          "C++ All-in-One For Dummies by John Paul Mueller and Jeff Cogswell",
        author: "John Paul Mueller, Jeff Cogswell",
      },
    ],
    quiz: {
      question: "How do you declare a string in C++?",
      options: [
        "string greeting = 'Hello, World!';",
        'string greeting = "Hello, World!";',
        "greeting string = 'Hello, World!';",
        'greeting string = "Hello, World!";',
      ],
      answer: 'string greeting = "Hello, World!";',
    },
  },
];
