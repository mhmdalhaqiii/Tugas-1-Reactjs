function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: '#74C0FC' }}></i>
              <span className="ms-2 fs-4 fw-bold">TokoBuku</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 fw-semibold">
            <li><a href="#" className="nav-link px-3">Home</a></li>
            <li><a href="#book" className="nav-link px-3">Book</a></li>
            <li><a href="#team" className="nav-link px-3">Team</a></li>
            <li><a href="#contact" className="nav-link px-3">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
      </div>

      {/* Heroes */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-5 fw-bold lh-1 text-body-emphasis">
              Logika Koding: Dari Nol Sampai Bisa
            </h1>
            <p className="lead">
              Panduan praktis untuk membangun pola pikir problem-solving seorang programmer, 
              lengkap dengan contoh kasus nyata dan pembahasan yang mudah dipahami.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli Sekarang</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg rounded">
            <img
              className="rounded-lg-3 img-fluid"
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8fDA%3D"
              alt="Coding Book"
            />
          </div>
        </div>
      </div>

      {/* Album */}
      <section className="py-5 text-center container" id="book">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Buku Best Seller</h1>
            <p className="lead text-body-secondary">
              Koleksi buku terpopuler dengan penjualan terbaik bulan ini, pilihan bacaan berkualitas untuk Anda.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Lihat Semua</a>
              <a href="#" className="btn btn-secondary my-2">Buku Lainnya</a>
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
     <div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      
      {/* Card 1 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="/public/cc.png" 
            className="card-img-top fixed-img" 
            alt="Book 1"
          />
          <div className="card-body">
            <p className="card-text">
              “Clean Code” karya Robert C. Martin – Panduan wajib bagi setiap programmer untuk menulis kode yang rapi dan mudah dipahami.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
              </div>
              <small className="text-body-secondary">Best Seller</small>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="/public/tpp.png" 
            className="card-img-top fixed-img" 
            alt="Book 2"
          />
          <div className="card-body">
            <p className="card-text">
              “The Pragmatic Programmer” – Buku legendaris dengan tips praktis untuk meningkatkan kualitas coding Anda.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
              </div>
              <small className="text-body-secondary">Trending</small>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="/public/ejs.png" 
            className="card-img-top fixed-img" 
            alt="Book 3"
          />
          <div className="card-body">
            <p className="card-text">
              “Introduction to Algorithms” – Referensi klasik untuk memahami dasar-dasar algoritma dengan penjelasan detail.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
              </div>
              <small className="text-body-secondary">Top Rated</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


      {/* Team Section */}
      <section id="team" className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-lg-4">
            <img src="https://e0.pxfuel.com/wallpapers/904/256/desktop-wallpaper-alvin-and-the-chipmunks-the-squeakquel-2009-thumbnail.jpg" className="rounded-circle mb-3" width="140" height="140" alt="Team 1"/>
            <h5>Alvin Haryanto</h5>
            <p className="text-muted">Founder & CEO</p>
            <p>Berpengalaman lebih dari 10 tahun dalam industri teknologi dan penerbitan digital.</p>
          </div>
          <div className="col-lg-4">
            <img src="data:image/jpeg;base64,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" className="rounded-circle mb-3" width="140" height="140" alt="Team 2"/>
            <h5>Theodore Yudhoyono</h5>
            <p className="text-muted">Head of Marketing</p>
            <p>Mengembangkan strategi pemasaran kreatif untuk menjangkau lebih banyak pembaca.</p>
          </div>
          <div className="col-lg-4">
            <img src="https://www.nicepng.com/png/detail/133-1339022_simon-frowning-simon-chipmunk-png.png" className="rounded-circle mb-3" width="140" height="140" alt="Team 3"/>
            <h5>Simon Pratama</h5>
            <p className="text-muted">Lead Developer</p>
            <p>Ahli dalam membangun sistem toko buku online dengan teknologi terkini.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama</label>
                <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda"/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="nama@email.com"/>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Pesan</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Tuliskan pesan Anda"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Kirim</button>
            </form>
          </div>
          <div className="col-md-6">
            <h5>Alamat Kami</h5>
            <p>Jl. Pendidikan No.45, Palembang, Indonesia</p>
            <p>Email: support@tokobuku.com</p>
            <p>Telp: +62 812 3456 7890</p>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31805.56307164834!2d104.7292103!3d-2.9760738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75e7f15b1dfd%3A0x3039d80b220c8f0!2sPalembang!5e0!3m2!1sid!2sid!4v1706517890102"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#book" className="nav-link px-2 text-body-secondary">Book</a></li>
            <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 Muhammad Alhaqi</p>
        </footer>
      </div>
    </>
  );
}

export default App;
