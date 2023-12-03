import React from 'react';
import axios from 'axios'


export default function Check() {
  const [name, setName] = React.useState("");
  const [group, setGroup] = React.useState("");
  const [part, setPart] = React.useState(1);
  const [sign, setSign] = React.useState("");
  const [result, setResult] = React.useState("");

  function onSubmit(e) {
        e.preventDefault();
        console.log("submit");
        axios.post("/check", {
            content: {
               name,
               group,
               part
            },
            sign
        }).then((response) => {
            setResult("OK");
        }).catch((err) => {
            setResult("Error");
        });
        return;
  }

  return (
      <>
        <h>Сдача лабораторной работы</h>
        <form onSubmit={onSubmit}>
            <label>ФИО:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>Группа:
                <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} />
            </label>
            <label>Часть:
                <input type="number" value={part} onChange={(e) => setPart(e.target.value)} />
            </label>
            <label>Ключ для сдачи:
                <input type="text" value={sign} onChange={(e) => setSign(e.target.value)} />
            </label>
            <button type="submit">Отправить</button>
        </form>
        {result ? <p>{result}</p> : null}
      </>
  );
}
