import React from "react";
import Feature from "../Features/Feature";
import { MdGppGood, MdLibraryAddCheck, MdLock, MdShare } from "react-icons/md";

const Features = () => {
  return (
    <div className="features-wrapper">
      <div className="title-large">Amazing Features</div>
      <div className="title-small">
        Due to its security, transparency, and flexibility, our purpose is to
        create a digital voting infrastructure based on the Ethereum
      </div>

      <div className="mobile-wrapper">
        <div>
          <Feature title="Immutability" icon={<MdLock />} align="right">
            <p>
              Immutability means something that can’t be changed or altered.
              This is one of the top blockchain features that help to ensure
              that the technology will remain as it is, a permanent, unalterable
              network.
            </p>
          </Feature>
        </div>

        <div className="mobile-container">
          <img src="/mobile.png" />
        </div>

        <div>
          <Feature title="Enhanced Security" icon={<MdGppGood />} align="left">
            <p>
              Privacy issues can also be addressed on blockchain by anonymizing
              personal data and using permissions to prevent access. Information
              is stored across a network of computers rather than a single
              server, making it difficult for hackers to view data.
            </p>
          </Feature>
        </div>
        <div>
          <Feature title="Decentralized" icon={<MdShare />} align="right">
            <p>
              In blockchain, decentralization refers to the transfer of control
              and decision-making from a centralized entity (individual,
              organization, or group thereof) to a distributed network. That is
              what this platform tends to achieve.
            </p>
          </Feature>
        </div>
        <div>
          <Feature
            title="Distributed Ledger"
            icon={<MdLibraryAddCheck />}
            align="left"
          >
            <p>
              Distributed ledgers use independent computers (referred to as
              nodes) to record, share and synchronize transactions in their
              respective electronic ledgers (instead of keeping data centralized
              as in a traditional ledger). Blockchain organizes data into
              blocks, which are chained together in an append only mode.
            </p>
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
