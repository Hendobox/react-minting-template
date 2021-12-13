import './App.css';

function App() {
  // Main Banner Image
  const mainBgImage = "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/12/03/b37a97d3-270c-4cdc-8c83-4ee735a686e8_95895212.jpg?itok=y0459xhc&v=1638533154";
 
  // ApesImage Data
  const apes = [
    { img: 'https://lh3.googleusercontent.com/F3twbu2BQbach9qBnzZaaTTSdD9p3elhyiyRCGVesqxvZecr5w_d4v3AdM3pmfIfYiozTY_6AsxFhVj1eRNb7VBKi_J1hLZJVPkVYw=w1400-k' },
    { img: 'https://lh3.googleusercontent.com/ZeVN3mXbx0ToUNLm4tGEOPlTsVW8ClMWBXcYzZwIqK2dNs9pzuCl-oZH1_I0-1AJw6AL0ZgWE2xVf_81c8Yw6lWLkkCMYgBZvC-9Fg=w1400-k' },
    { img: 'https://lh3.googleusercontent.com/41NsWG15QbThDqJlbEf7QdFUr8DyUUPVzNacMT1_E4CzpWvS_jYx2hrWirCvoLulg-scRr1N_zmeXOHFWxfxl1IFWtqqCCp7jZNYng=w1400-k' },
    { img: 'https://observer.com/wp-content/uploads/sites/2/2021/08/Yuga-Labs-Bored-Ape-Yacht-Club-5812.jpg?quality=80&w=631&strip' },

    { img: 'https://lh3.googleusercontent.com/ucJ-Du-Z_h4dKQuTocZRgYAQwCqTJVkUrwlayiLx88JxZyOevB8L6SszJnm7SjvOYDXPDWw8UP_nyXDiBCfolbo897IPMVzIP5A2pg=w1400-k' },
    { img: 'https://static.wixstatic.com/media/95db9b_d5b6db638d014ef8bd9744ee9096b98e~mv2.png/v1/fill/w_512,h_512,al_c/95db9b_d5b6db638d014ef8bd9744ee9096b98e~mv2.png' },
    { img: 'https://lh3.googleusercontent.com/RIF5fFsMe2k1Ebej-72hF0EMrx8lO4shtsuaLFDsJFw0BxcChfkYYwC7SGvy6QFTJfd-sKuWxRAKBvyK69lMy6wju3rZhx6wJNxk' },
    { img: 'https://lh3.googleusercontent.com/jlznVI_z4566uBqqSp_eGYOKP9wz53mjCXgjv4kBa8A-hLEG4M8BtY_LgRFO4aSBRt1149kWF7Ve9X-8VTblBhdj9jzv4sMbYYkAbg=w1400-k' },

    { img: 'https://lh3.googleusercontent.com/Dh7W_AO_mLHuxdPENRx56DJ7UrPjqi0j8YscubU2TX3mrZvgQDM0oOm3E0Mhw_uMTP1er8iVv8htH6W3Hfa8rXwQ3k5s6GMQa4Yyvd4=w1400-k' },
    { img: 'https://lh3.googleusercontent.com/AY8s9_6GXyap5e8TZElJcD1EYEDz2v9N7BPzYU1IyQ-VdIQkY-1LJG9OZKqLkgWpnDhIFVeOnPppeRWBmLpWL5tsuj4CexusjRy8eA=w1400-k' },
    { img: 'https://lh3.googleusercontent.com/QpTmndmQbrhkGUDVswDYflLN8naMVedX-1J_Gas4DKgLaa_f66cFLxlU22Z1sp2RB11TcCsXHIE8Z_HV_DXTpbfIXJRn8D2_osO5=w600' },
    { img: 'https://lh3.googleusercontent.com/a4kNHRG8xg1Y5GEM5pXTnJSQCBUl5sQCQLxWjxxRdU-GWma6YsUquaxC6bkFDDsqHRSn21lElFY7i8R_Q8FNo9WlYkBqNPj_g3Xdx5I=w1400-k' },

    { img: 'https://lh3.googleusercontent.com/8UhU0aiAdZ_ktsaDtkak16sgxPa7cLqXdD7DKBN_4hsfUm5gGzHKfrA-eLMQr_QH2NvyMjJndQvraZys7N5OA-GfU6FrC65S00l3cg' },
    { img: 'https://lh3.googleusercontent.com/MTnQOdqRP6uwlVFwyn-y9vMe0GnAonAZZzysx8II5sV6GJENTQPCEcw9m8eK_q-zwgNAhqGQUb5J_i8CKT3YB9bmoRkU7_eXq2tM=w1400-k' },
    { img: 'https://lh3.googleusercontent.com/Dk1bsZWYQ2LXJoy5r5qk4b-ov92adDlAPmH5Mt0rSantgkf781evSQXVB6Sck1D0Mq9kUFu1pHABMdx0gil4w7LFpHm-jE2mxeLo=w600' },
    { img: 'https://everipedia-storage.s3.amazonaws.com/GalleryMediaItem/lang_en/bored-ape-yatch-club/7D401B7B-DF32-4E58-80E1-3B767561C0FFjpeg.jpeg' },
  ]
  return (
    <div className="App">

      {/* MAIN BANNER */}
      <div className="main-card-wrapper" style={{ backgroundImage: `url(${mainBgImage})` }}>
        <div className="main-card__inner-wrapper">
          <h1 className="header-txt">React Minting Website</h1>
          <button className="main-mint-btn">Mint</button>
        </div>
      </div>

      {/* APE LIST */}
      <div className="cards-wrapper">
        {apes.map((ape, index) => (
          <div className="cards-item" key={index}>
            <div className="img-wrapper">
              <img src={ape.img} alt={`ape_${index}`} />
            </div>
            <div className="btn-wrapper">
              <button type="button" className="sm-mint-button">Mint</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
