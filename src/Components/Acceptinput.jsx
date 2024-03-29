import React, { useState } from 'react';
import styles from '../Styles/Acceptinput.module.css';
import store from '../Assets/store.mp3';

function Acceptinput(props) {

  let [color, setcolor] = useState("");

  const create = () => {
    let g = document.getElementById('groupname').value;
    let b = true;
    const w = g.split(" ");

    if (g == "" && color == "") {
      alert("Please type a group name and choose a colour to proceed");
      return;
    }

    if (g == "") {
      alert('You need to enter a group name to proceed');
      b = false;
    }

    let initials;
    let d = true;

    if (w.length == 1) {
      initials = g.substring(0, 1) + " ";
      d = false;
    }

    if (color == "") {
      alert('You need to choose a color to proceed');
      b = false;
    }

    if (b == true) {
      if (d == true) {
        const firstCharSecondWord = w[1].charAt(0);
        initials = g.substring(0, 1) + firstCharSecondWord;
      }
      let a = JSON.parse(localStorage.getItem("storename"));
      for (let i = 0; i < a.length; i++) {
        let name = a[i];
        if (name == g) {
          alert('This group name is already present , please try another group name!');
          return;
        }
      }
      a.push(g);
      localStorage.setItem("storename", JSON.stringify(a));
      let notes = [];
      let notesapp = JSON.stringify(notes);
      let c = localStorage.getItem('index');
      let b = JSON.parse(c);
      b = b.map((element) => Number(element) + 1);
      if (b[0] < 10)
        b[0] = "0" + b[0];
      else
        b[0] = String(b[0]);
      g = b[0] + color + initials.toUpperCase() + g;
      localStorage.setItem(b[0], notesapp);
      localStorage.setItem('index', JSON.stringify(b));
      setcolor("");
      const interests = localStorage.getItem("Gn");
      const data = JSON.parse(interests);
      data.push(g);
      let demo = JSON.stringify(data);
      localStorage.setItem("Gn", demo);
      new Audio(store).play();
      props.settrigger(false);
      props.setstorein(!(props.storein));
    }
  }

  return (props.trigger) ?
    (
      <>
        <div className={styles.popupcontainer} onClick={() => props.settrigger(false)}></div>
        <div className={styles.popupcontainer1} onClick={() => props.settrigger(false)}></div>
        <div className={styles.popupcontainer2} onClick={() => props.settrigger(false)}></div>
        <div className={styles.popupcontainer3} onClick={() => props.settrigger(false)}></div>
        <div className={styles.popup}>
          <div className={styles.title}>Create New group</div><br />
          <div className={styles.gn}>Group Name</div><br />
          <div className={styles.cc}>Choose colour</div><br />
          <input type='text' className={styles.text} placeholder='Enter group name' id='groupname' />
          <div className={styles.violet} onClick={() => { setcolor('#B38BFA') }} />
          <div className={styles.pink} onClick={() => { setcolor('#FF79F2') }} />
          <div className={styles.skyblue} onClick={() => { setcolor('#43E6FC') }} />
          <div className={styles.orange} onClick={() => { setcolor('#F19576') }} />
          <div className={styles.darkblue} onClick={() => { setcolor('#0047FF') }} />
          <div className={styles.lightblue} onClick={() => { setcolor('#6691FF') }} />
          <div className={styles.crtbtn} onClick={() => create()}><p style={{ marginTop: '2px', cursor: 'pointer' }}>
            Create</p></div>
        </div>
      </>
    ) : "";
}

export default Acceptinput;