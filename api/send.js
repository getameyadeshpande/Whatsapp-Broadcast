export default async function handler(req, res) {

  const { number } = req.body

  const response = await fetch(
    "https://graph.facebook.com/v22.0/977415535463358/messages",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer EAAhPkI5ldD4BQydaBkT4wT3HjScMc9FpZAZAZCc3mWpMreJ7kgVgXYXPTSaqus4Ty1awu38sqz1cfu5E6RuFuXH3jDSXhknEOTXZB3uldPLvIAlwdf3bmeZA3O6s6jN9vycZBJOIZBXZBNJmACHgmf5ApMw59suXx48WX0AZBjhZAZAw9RMdY3XgcG8ZAwyQ8AZAqQC1m3vvZBy1ar1dEdxffgrARgR9tstvO0KWRLqk2hoKCN7OcVNqvA36jZCcaPjOV28gnxxwh73leW7ZBaJ26DkmlzzfIX36BjNN5Bh7ZBwZDZD",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: 918286202242,
        type: "template",
        template: {
          name: "hello_world",
          language: { code: "en_us" }
        }
      })
    }
  )

  const data = await response.json()

  console.log(data)

  res.status(200).json(data)
}