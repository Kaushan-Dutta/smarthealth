const express=require('express')
const http=require('http');
const cors=require('cors');
const { Configuration, OpenAIApi } = require("openai");
const fetch = require("node-fetch");

require("dotenv").config();
const configuration = new Configuration({
    apiKey: `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`,
})
const app=express();
const server=http.createServer(app);
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use('/',require('./Controllers/publicontroller'))
app.use('/auth',require('./Controllers/authController'))

/* app.post("/ask", async (req, res) => {
    const prompt = req.body.prompt;
    console.log(prompt)
    try {
        const fs = require('fs');

        const filePath = './file.txt'; // Adjust the path to your file
        
        
          const data = fs.readFileSync(filePath, 'utf8');
          console.log('File contents:');
          console.log(data);
       
      if (prompt == null) {
        throw new Error("Uh oh, no prompt was provided");
      }
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:'What can be the possible reason '+data,
        max_tokens: 1000,
        temperature: 0,
      });
      console.log(response)
      const completion = response.data.choices[0].text;
      return res.status(200).json({
        success: true,
        message: completion,
      });
    } catch (error) {
      return console.log(error.message);
    }
});
app.post('/completion',async(req,res)=>{
    try{
        const response=await fetch('https://api.openai.com/v1/chat/completions',{
            method:'POST',
            body: JSON.stringify({
                model:'gpt-3.5-turbo',
                messages:[{role:"user",content:"how are you"}],
                max_tokens:100
            }),
            headers:{
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json'
            }
        }) 
        return res.status(200).json({message:await response});
    }
    catch (error) {
        console.log(error.message);
      }

}) */


server.listen(3030,()=>{console.log("Server started running");});