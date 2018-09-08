Sometimes I forget what packages are needed for most of the first weeks assignments. To help this minor inconvenience for me, I am going to save a list of the required packages:
npm install react@15.5.4 react-dom@15.5.4 prop-types@15.5.10 --save styled-jsx  
npm install webpack@3.4.0 babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 webpack-dev-server@2.5.0 react-hot-loader@3.0.0-beta.7 html-webpack-plugin@2.29.0 eslint@4.13.1 eslint-plugin-react eslint-loader react-router-dom@4.0.0 url-loader@0.6.2 file-loader@1.1.6 --save-dev
eslint --init
-------
Sometimes it is hard for me to remember that environment changes can sometimes lead to fixing more problems than it's worth. For instance, I spent over an hour trying to deal with an issue in npm and globally installing node modules. I was using sudo in doing so with osx, but eventually I had to put it aside. It's important to recognize what tasks are time sinks and what are your back up plans to deal with these inconveniences.

When passing data and properties between Components, I forgot exactly what order they came in. This is something I need to spend more time on personally. Sometimes I forget exactly the order in which data is passed. If I would have left Home and List as they were, they would  have been reversed.

One of my longest issues so far, was realizing I cant put links for placeholders. If the routes themselves don't exist, the project will fail to render. I should be less sloppy in this regard.
