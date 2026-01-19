import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="footerInfoWeb">
        <div className="footerInfoWeb__title">
          <img src="/images/global/logoApp.png" alt="Logo" />
          <div />
          <h3>
            Platform pembelian tiket konser resmi yang aman, cepat, dan
            terpercaya.
          </h3>
        </div>
        <div className="footerInfoWeb__descList">
          <div className="footerInfoWeb__descList__first">
            <h1>Kategori</h1>
            <ul>
              <Link to="" className="link">
                Home
              </Link>
              <Link to="" className="link">
                Konser
              </Link>
              <Link to="" className="link">
                Jadwal
              </Link>
              <Link to="" className="link">
                Bantuan
              </Link>
            </ul>
          </div>
          <div className="footerInfoWeb__descList__second">
            <h1>Informasi</h1>
            <ul>
              <Link to="" className="link">
                Tentang Kami
              </Link>
              <Link to="" className="link">
                Kebijakan Privasi
              </Link>
              <Link to="" className="link">
                Syarat & Ketentuan
              </Link>
            </ul>
          </div>
          <div className="footerInfoWeb__descList__third">
            <h1>Hubungi Kami</h1>
            <ul>
              <li>
                <img src="/images/footer/call.png" alt="Telp" />
                <span>0896-3712-9854</span>
              </li>
              <li>
                <img src="/images/footer/mail.png" alt="Email" />
                <Link to="mailto:support@gigsticket.com" className="link">
                  support@gigsticket.com
                </Link>
              </li>
              <li>Jl. Kemang Raya No. 97, Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-slate-600" />
      <h2 className="copyright">
        &copy; Copyright 2026, GigsTicket, All Rights Reserved.
      </h2>
    </div>
  );
}
