// const employee =  {
//         "name": "John",
//         "age": 30,
//         "city": "New York",
//         der: function(){
//             console.log("I am sahil")
//         }
// }

// employee.der();

const arr =[
    {
        "tag": "Organization_Location",
        "patterns": [
            "Where are Bourntec's office located?",
            "Where is your office?",
            "What's the address of your organization?",
            "Can you tell me the location of Bourntec's offices?",
            "What are the addresses of Bourntec's offices?",
            "I'd like to know where Bourntec has its offices.",
            "Please provide information on the locations of Bourntec's offices.",
            "Tell me about the geographical presence of Bourntec.",
            "Where can I find Bourntec's physical offices?",
            "I'm interested in Bourntec's office locations, can you help?",
            "Provide details about Bourntec's office addresses."
        ],
        "responses": [
            "Bourntec has a presence in 5 regions, each with its office. To help you better, please specify the location you're interested in India(Hyderabad, Kerala, Odisha), North America, Middle East and I can provide you with the corresponding office address and a link to its location."
        ],
        "context_set": ""
    },
    {
        "tag": "North_America_Location",
        "patterns": [
            "North America",
            "Where are Bourntec's office in North America?",
            "Where is your office in North America?",
            "Where is Bourntec's North America office located?",
            "What's the address of Bourntec's North America office?",
            "What's the address of your organization?",
            "Can you tell me where Bourntec's North America is?",
            "I need to know the location of Bourntec's North America corporate office.",
            "Where can I find Bourntec's North America campus?",
            "I'd like to know the exact location of Bourntec's office in North America.",
            "I'd like to know the exact location of organization in North America.",
            "What's the street address of Bourntec's North American corporate office?",
            "Please share the location details for Bourntec's North America office.",
            "Where in North America can I find Bourntec's main office?"
        ],
        "responses": [
            "Bourntec's North America office is situated at 1701 East Woodfield Road, Suite 200, Schaumburg, IL 60173. Here is the link to <a target='_blank' href='https://maps.app.goo.gl/42KTDfAzW9WQbknh8'>view the location on Google Maps</a>."
        ],
        "context_set": ""
    },
    {
        "tag": "India_Location",
        "patterns": [
            "Bharat",
            "India",
            "Odisha",
            "Bhubaneswar",
            "Bhubaneswar, Odisha",
            "Acharya Vihar , Bhubaneswar, Odisha",
            "Acharya Vihar",
            "Sundarpada Bhubaneswar, Odisha",
            "Sundarpada",
            "Kerala",
            "Kochi",
            "Chittethukara, Kochi, Kerala",
            "Hyderabad",
            "Hitech City, Madhapur, Hyderabad, Telangana",
            "What's the address of your organization?",
            "Where are Bourntec's office in Bharat?",
            "Where are Bourntec's office in India?",
            "Where are Bourntec's office in Odisha?",
            "Where are Bourntec's office in Kerala?",
            "Where are Bourntec's office in Hyderabad?",
            "Where is your office in Bharat?",
            "Where is your office in India?",
            "Where is your office in Odisha?",
            "Where is your office in Kerala?",
            "Where is your office in Hyderabad?",
            "Where is Bourntec's Bharat office located?",
            "Where is Bourntec's India office located?",
            "Where is Bourntec's Odisha office located?",
            "Where is Bourntec's Kerala office located?",
            "Where is Bourntec's Hyderabad office located?",
            "What's the address of Bourntec's Bharat office?",
            "What's the address of Bourntec's India office?",
            "What's the address of Bourntec's Odisha office?",
            "What's the address of Bourntec's Kerala office?",
            "What's the address of Bourntec's Hyderabad office?",
            "Can you tell me where Bourntec's Bharat is?",
            "Can you tell me where Bourntec's India is?",
            "Can you tell me where Bourntec's Odisha is?",
            "Can you tell me where Bourntec's Kerala is?",
            "Can you tell me where Bourntec's Hyderabad is?",
            "I need to know the location of Bourntec's Bharat corporate office.",
            "I need to know the location of Bourntec's India corporate office.",
            "I need to know the location of Bourntec's Odisha corporate office.",
            "I need to know the location of Bourntec's Kerala corporate office.",
            "I need to know the location of Bourntec's Hyderabad corporate office.",
            "Where can I find Bourntec's Bharat campus?",
            "Where can I find Bourntec's India campus?",
            "Where can I find Bourntec's Odisha campus?",
            "Where can I find Bourntec's Kerala campus?",
            "Where can I find Bourntec's Hyderabad campus?",
            "I'd like to know the exact location of Bourntec's office in Bharat.",
            "I'd like to know the exact location of Bourntec's office in India.",
            "I'd like to know the exact location of Bourntec's office in Odisha.",
            "I'd like to know the exact location of Bourntec's office in Kerala.",
            "I'd like to know the exact location of Bourntec's office in Hyderabad.",
            "I'd like to know the exact location of organization in Bharat.",
            "I'd like to know the exact location of organization in India.",
            "I'd like to know the exact location of organization in Odisha.",
            "I'd like to know the exact location of organization in Kerala.",
            "I'd like to know the exact location of organization in Hyderabad.",
            "What's the street address of Bourntec's Bharat corporate office?",
            "What's the street address of Bourntec's India corporate office?",
            "What's the street address of Bourntec's Odisha corporate office?",
            "What's the street address of Bourntec's Kerala corporate office?",
            "What's the street address of Bourntec's Hyderabad corporate office?",
            "Please share the location details for Bourntec's Bharat office.",
            "Please share the location details for Bourntec's India office.",
            "Please share the location details for Bourntec's Odisha office.",
            "Please share the location details for Bourntec's Kerala office.",
            "Please share the location details for Bourntec's Hyderabad office.",
            "Where in Bharat can I find Bourntec's main office?",
            "Where in India can I find Bourntec's main office?",
            "Where in Odisha can I find Bourntec's main office?",
            "Where in Kerala can I find Bourntec's main office?",
            "Where in Hyderabad can I find Bourntec's main office?"
        ],
        "responses": [
            "Bourntec's India office is situated at 5 locations. 1.Sundarpada, Bhubaneswar, Odisha, India. -> <a target='_blank' href='https://maps.app.goo.gl/yNC2AsDwzSfrgmfD8'>view the location on Google Maps</a>.<br>2.OCAC Building,Acharya Vihar,Bhubaneswar, Odisha, India -> <a target='_blank' href='https://maps.app.goo.gl/9S2SHxF7faHupn928'>view the location on Google Maps</a>.<br> 3.Hitech City, Madhapur, Hyderabad, India. -> <a target='_blank' href='https://maps.app.goo.gl/42KTDfAzW9WQbknh8'>view the location on Google Maps</a>.<br>4.Kakkanad, Kochi, Kerala, India. -> <a target='_blank' href='https://maps.app.goo.gl/LmDxVkfZ8viGojcs6'>view the location on Google Maps</a>.<br>5.ourntec Solutions Pvt Ltd,Noel Focus, 4th Floor(4B, 4C, 4D),Chittethukara,CSEZ P.O, Kochi, Kerala,  India. -> <a target='_blank' href='https://maps.app.goo.gl/84S3vvCAEvFBZRCZA'>view the location on Google Maps</a>.<br>"
        ],
        "context_set": ""
    }
]

console.log(arr[1].tag);





