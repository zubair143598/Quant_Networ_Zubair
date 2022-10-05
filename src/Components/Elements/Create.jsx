import React from "react";

const Create = () => {
  return (
    <div className="container-fluid createFluid">
    <div className="container  create">
      <div className="row">
        <div className="col-md-2"></div>
        <div className=" text-center col-md-8">
          <h1 className="head1">Create value, reduce costs, mitigate risk</h1>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="hover">
            <h3>Capital market</h3>
            <p>
              Capital markets Assets of all kinds – both physical and digital –
              are being tokenised. Issuers are gaining access to entire new
              pools of liquidity, while investors are diversifying their
              portfolios in ways they could only dream of just a few years ago.{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-3">
          <div className="hover">
            <h3>Compliance</h3>
            <p>
              Blockchain can make the analysis of transaction patterns easier
              for tax authorities, regulatory bodies and other responsible
              institutions. It can be used to simplify self-declarations,
              enforcement, or anti money laundering operations.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 ">
          <div className="hover">
            <h3>Payments</h3>
            <p>
              Cross-border payments – whether in digital currencies or fiat
              currency – are more flexible and secure when handled over
              blockchain. With Quant solutions, you can send and receive digital
              payments, set up payment and collection processes such as
              crowdfunding, then automatically push the funds to an exchange to
              be converted into fiat currency.
            </p>
          </div>
        </div>

        <div className="col-md-5"></div>
        <div className="col-md-1"></div>
        <div className="col-md-3 ">
          <div className="hover">
            <h3 >Supply chain and trade finance</h3>
            <p>
              Blockchains are bringing clarity and certainty to areas such as
              procurement, logistics, provenance, customs and payments – helping
              to make notoriously complex global supply chains much more
              efficient.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <div className="hover">
            <h3>Digital currencies</h3>
            <p>
              Central banks across the world are investigating the adoption of
              digital currencies, while commercial entities are issuing their
              own stablecoins – often to great acclaim.
            </p>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-3 ">
          <div className="hover">
            <h3>Insurance</h3>
            <p>
              By removing intermediaries, blockchain could completely transform
              the insurance industry with a wide range of use cases, from the
              optimisation of existing processes to the introduction of new
              business models.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Create;
