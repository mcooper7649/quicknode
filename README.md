##### At QuikNode, we value passion, progress, humility, trust and excellence. This is a three part assignment, engineered with our company values and the skills you’ll need to thrive as a support engineer in mind.

##### What we're selecting for at this step is clarity of thought, ability to communicate and humility.

##### How clear is your writing?

##### What are the items that you consider when working through a customer issue?

##### Are you willing to invest the time necessary to help us understand your abilities?

##### We aim to be respectful of your time, this exercise should not take more than 30-40 minutes, but feel free to take as much time as you need:

1. Given the following Ethereum address, please query the blockchain to get the latest balance of this account on Rinkeby, Ropsten, and Mainnet. You may use any command line tool or scripting language you choose. Please provide to us the commands or scripts that you use to get the balance, as well as the balance you get, and at what block number you have queried. (Hint: be resourceful, the endpoint in the screenshot is not a valid endpoint)

- Bonus points: describe your journey in completing this task, provide context with clear and concise written responses.

##### I know there are many different ways to acheive this task but I wanted to lean into my web development skillset and utilize react to pull this information using etherscan and blockcypher APIs. This way we can pull this information in the future without having to learn and type complex scripts while we can use a nice and clean UI. This steps involved are listed as such:

> 1. First, I wanted to use create-react-app to spin up a fully functional react app without having to configure all the boilerplate.
> 2. Next, I removed all the unnessesary code and created a dashboard component that will hold all the account information and so logically I will put my useEffect Axios gets in that component so we can keep it modular.
> 3. After creating the Dashboard component I imported into our App.js and now we can begin configuring
> 4. Inside the Dashboard I imported useState because I knew I would want to store some dynamic variables such as Network, Account, Balance and Block
> 5. Next I just needed to read the documentation on how to query the appropriate endpoint(s) to find and save this information.
> 6. Once I had the format for posting a query to the endpoint I set a query variable with string interpolation so we can inject variables to make our query dynamic. Then I can pass that query into our useEffect hook with Axios and store all the response data.
> 7. I was able to retreive the balance in wei so I converted the output into Eth before displaying in our view.
> 8. I added 3 Buttons that will change the endpoint of our query
> 9. I added an input should we want to use this tool with something other than the default address.
> 10. To get latest block I used Blockcypher API
> 11. Styling was done with boostrap for speed.

[QuikNode-Etherscan-Dashboard](https://quiknode-dash.netlify.app/)
![alt text](https://img001.prntscr.com/file/img001/bszQ9VGBRoyxuHHofsGlLA.png)

## 1. A customer is reporting that they were charged for a plan that they already canceled.

### What steps are you going to take to resolve this situation?

##### This is a common issue and can be quite frustrating for the customer involved and can be tricky to navigate without being empathetic to customer and situation at hand.

> 1. First, I would listen to the customer and take notes of the situation as most frustrated customers don't like to repeat themselves.
> 2. Next, I would confirm account information such as account number or email and access their account on our end and see if the account was actually cancelled.
> 3. If the plan was actually cancelled, prior to the charge being submitted, I would reference our refund policy and explain this situation as a technical bug and process the refund back to the customer.
> 4. If the plan wasn't cancelled, tactifully I would explain to the customer that the plan didn't seem to be cancelled on our end. From here I would reference our refund policy and ask the customer if they want to still cancel? and process a pro-rated refund up to todays date, if they are ok with that; If they want a backdated refund I again may have to reference refund policy or escalate.

## 1. A customer is reporting that the service they signed up & paid for is not working for them (or not how they expect).

### what steps are you going to take to resolve this situation?

##### This is another common issue and can be caused by two different reasons. The customer needs a little help setting up our service and we can use this as a teaching moment. Or our customer is confused on the type of service we provide.

> 1. First, I would listen intently while taking notes. We need to differentiete between if the service is having technical issues or just not meeting expecations.
> 2. If technical, this is an easy fix, we can go over the configuration together and scour over the logs and see what kind of issues they are having. As long as all our customers aren't having the same issues, it's likely a configuration problem. From here we just compare and contrast the configuration of a similiar node that is functional and we should be able to get it running.
> 3. If not meeting expectations we have a meeting with our product specialists and technical support and speak with our customer and figure out what expectations they are trying to meet and how we can get there or what features are needed in the future to achieve these goals. This way we can submit feature requests to our development team and prioritize HIGH volume requests.
> 4. We must understand that not all expectations can be met of course but more often than not the end user just needs advanced support or a point of contact that can help guide or at the very least someone that will listen to their feedback and relay it to the appropriate teams.
