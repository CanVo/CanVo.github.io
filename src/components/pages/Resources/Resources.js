import React, {useEffect} from 'react';
import '../../../App.css';
import './Resources.css';
import Aos from 'aos';

function Resources () {
  useEffect (() => {
    Aos.init({duration: 800});
  }, []);


  return (
    <div className="resources-page">
      <div className="resources-body"
      >
        <div className="resources-sections">
          <h1>
            Books
          </h1>
          <p> Below is a cool list of books I either read or am planning on reading: </p>
          <ul className="resources-book-list">
            <h3 className="resources-list-category"> Windows Specific Books </h3>
            <li>
              <a href="https://www.amazon.com/Windows-Internals-Part-architecture-management/dp/0735684189">Windows Internals, Part 1: System architecture, processes, threads, memory management, and more (Developer Reference)</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Windows-Internals-Part-2-7th/dp/0135462401">Windows Internals, Part 2 (Developer Reference)</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Windows-via-softcover-Developer-Reference/dp/0735663777">Windows via C/C++</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Windows-Kernel-Programming-Pavel-Yosifovich/dp/1977593372">Windows Kernel Programming</a>
            </li>
            <li>
              <a href="https://www.amazon.com/Windows-10-System-Programming-Part/dp/B086Y6M7LH">Windows 10 System Programming, Part 1</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Windows-10-System-Programming-Part/dp/B09JJJ7QZ4">Windows 10 System Programming, Part 2</a>
            </li>


            <h3 className="resources-list-category"> Video Game RE </h3>
            <li>
              <a href="https://www.amazon.com/Hacking-Art-Exploitation-Jon-Erickson/dp/1593271441">Hacking: The Art of Exploitation</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Practical-Reverse-Engineering-Reversing-Obfuscation/dp/1118787315">Practical Reverse Engineering: x86, x64, ARM, Windows Kernel, Reversing Tools, and Obfuscation</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Implementing-Reverse-Engineering-Conventions-Application/dp/9391030378">Implementing Reverse Engineering</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Implementing-Reverse-Engineering-Conventions-Application-ebook/dp/B09DT5N5JP">Practical Reverse Engineering: x86, x64, ARM, Windows Kernel, Reversing Tools, and Obfuscation</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Shellcoders-Handbook-Discovering-Exploiting-Security/dp/047008023X">The Shellcoder's Handbook: Discovering and Exploiting Security Holes</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Exploiting-Online-Games-Massively-Distributed/dp/0132271915">Exploiting Online Games: Cheating Massively Distributed Systems</a>
            </li>

            <li>
              <a href="https://www.amazon.com/Game-Hacking-Developing-Autonomous-Online/dp/1593276699">Game Hacking: Developing Autonomous Bots for Online Games</a>
            </li>


            <h3 className="resources-list-category"> General Security </h3>
              <li>
                <a href="https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing/dp/1494932636">The Hacker Playbook: Practical Guide To Penetration Testing</a>
              </li>

              <li>
                <a href="https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing/dp/1512214566">The Hacker Playbook 2: Practical Guide To Penetration Testing</a>
              </li>

              <li>
                <a href="https://www.amazon.com/Hacker-Playbook-Practical-Penetration-Testing/dp/1980901759">The Hacker Playbook 3: Practical Guide To Penetration Testing</a>
              </li>
          </ul>

          <h1>
            Websites
          </h1>
          <p> List of some cool websites that I've learned from: </p>
          <ul className="resources-websites-list">
            <li>
              <a href="https://guidedhacking.com/">Guided Hacking Forums</a>
            </li>
          </ul>

          <h1>
            Videos
          </h1>
          <p> Some cool videos I've watched and learned neat things from: </p>

          <ul className="resources-videos-list">
            <li>
              <a href="https://www.youtube.com/playlist?list=PLt9cUwGw6CYHKBH5OoR8M2ELGlNlrgBKl">CS 420: Intro to game hacking</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Resources;


