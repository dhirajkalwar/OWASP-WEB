import { useState, useEffect } from "react";
// import './LinuxBootLoader.css'; // Import your CSS file

const LinuxBootLoader = () => {
  const bootMessages = [
    "Initialzing request",
    "Resolving internet address 127.0.0.1",
    "Requesting access to server",
    "Entering credentials",
    "Login denied",
    "Re-entering credentials",
    "Access granted",
    "Finding CTF backend services",
    "Services found on port 80",
    "Starting mcstausd",
    "Starting portmap",
    "Starting setroubleshootd",
    "Starting RPC idmapd",
    "Starting mdmonitor",
    "Starting system message bus",
    "Starting Bluetooth services",
    "Starting other filesystems",
    "Starting PC/SC smart card daemon (pcscd)",
    "Starting hidd",
    "Enabling /etc/fstab swaps",
    "INIT: Entering runlevel 3",
    "Entering non-interactive startup",
    "Applying INTEL CPU microcode update",
    "Checking for hardware changes",
    "Bringing up interface eth0",
    "Determining IP information for eth0... done.",
    "Connecting to backend service",
    "Connected to backend service",
    "Starting setroubleshootd",
    "Starting RPC idmapd",
    "Starting mdmonitor",
    "Starting system message bus",
    "Starting Bluetooth services",
    "Starting other filesystems",
    "Login successful",
    "Reading database",
    "Fetching data from database",
    "Data acquired",
    "Finding other resources",
    "Fetching resources",
    "Processing DOM",
    "Loading images",
    "Loading content",
    "Page rendered",
    "Starting display manager",
    "WELCOME TO OWASP TCET CTF INC 2023",
    "Initializing...",
  ];

  const [bootProgress, setBootProgress] = useState(0);
  const [Delay, setDelay] = useState(1000);

  const goScrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  useEffect(() => {
    const bootTimer = setInterval(() => {
      goScrollToBottom();
      if (bootProgress < bootMessages.length - 1) {
        setBootProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(bootTimer);
      }
      if (bootProgress > 3) {
        setDelay(10);
      }
    }, Delay);

    return () => clearInterval(bootTimer);
  }, [bootProgress]);

  return (
    <div className="terminal">
      <div className="body">
        <div className="output">
          {bootMessages.slice(0, bootProgress + 1).map((message, index) => (
            <div key={index} className="message">
              <span className="prompt text-[#00FF33]">[root@localhost ~] </span>
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinuxBootLoader;
