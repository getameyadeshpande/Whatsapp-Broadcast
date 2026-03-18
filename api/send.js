export default async function handler(req, res) {

  const { number } = req.body

  const response = await fetch(
    "https://graph.facebook.com/v22.0/977415535463358/messages",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer EAAhPkI5ldD4BQ1PzuUQceGk3wjBcwahB21V6cCIbgOB8LgSGaBs1ZBUlgfQ2ob7pF22rX0ZA4bQZButmG1p9j1YzZC2bJMQA3LLzXZBw7dDAhQ2ZAv1UmGA7T5CZAAFxKinDSvzmdrOvpP9AzgoLocfnz4wm0rdCsHfHgjo8aTS1BSdGarrVpgR0ASg5MzgHDEHFhZCgr56lEDvKI1FTlPNAiTsDai0mHSESCQQORRxONtkY0VcsTrmVdJGzmt81EvLIwTfO8V8VDNhoFWMthx65EaunQT0ZCEN9x9AZDZD",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: number,
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

// {
//   "messaging_product": "whatsapp",
//   "to": "917977603043",
//   "type": "template",
//   "template": {
//     "name": "updated_gudipadwa",
//     "language": {
//       "code": "en"
//     },
//     "components": [
//       {
//         "type": "header",
//         "parameters": [
//           {
//             "type": "image",
//             "image": {
//               "link": "https://imgeng.jagran.com/images/2025/03/28/template/image/gudi-padwa-30-march-2025-1743139811046.jpg"
//             }
//           }
//         ]
//       }
//     ]
//   }
// }