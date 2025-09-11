"use client";
import React, { use } from 'react'
import { addToCart } from '../components/AddToCart.js';
import { toast } from 'react-toastify';


const Buyfruits = () => {
  const handleAddToCart = async (fruitId) => {
    if (fruitId === "") {
      toast.error('Item is out of stock');
      return;
    }
    try {
      const result = await addToCart(fruitId);

      toast.success(result.message || 'Added to cart');
    } catch (err) {
      toast.error(err.error || 'Failed to add to cart');
    }
  };
  return (
    <main>
      <div className='mt-12'>
        <h1 className='text-4xl text-amber-400 flex justify-center'>Buy Fresh Fruits </h1>
        <h2 className='text-3xl flex text-green-400 m-3.5 justify-center'>Available At Your Location</h2>
      </div>
      <div className='mt-16'>
        <h1 className='text-5xl flex justify-center text-amber-500'>Mangoes</h1>
      </div>
      <section className='grid grid-cols-5 mx-6 my-8'>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-alphonso_480x480.jpg?v=1685511367"
                alt="Alphonso" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Alphonso
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Alphonso mangoes, known as the "King of Mangoes," are a prized variety from India. They are renowned for their rich, creamy texture, and unique sweet and musky flavor</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 150</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart('684c1a57ae498c0ccb1df4dd')}>Add To Cart</button>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-kesar-mango_480x480.jpg?v=1685511462"
                alt="Kesar" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Kesar
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Kesar mango, also known as Gir Kesar, is a popular mango variety originating from the Junagadh district of Gujarat, India. It's prized for its distinct saffron-colored flesh. </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 120</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart('684c1a57ae498c0ccb1df4de')}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-dasheri-mango_480x480.jpg?v=1685511608"
                alt="Dasheri" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Dasheri
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Dasheri mango, originating in India, is a sweet and fragrant cultivar highly prized for its unique flavor and aroma. It's known for its medium to large size, smooth yellow skin</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 130</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4df")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Banganapalli_480x480.jpg?v=1685511835"
                alt="Banganapalli" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Banganapalli
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Banganapalli mango, also known as Baneshan or Safeda, according to Golden Hills Farm, is a popular Indian mango variety known for its sweet, aromatic, and fiberless flesh.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 140</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e0")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-langra_480x480.jpg?v=1685511978"
                alt="Langra" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Langra
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Langra is a popular Indian mango variety, known for its sweet, juicy flesh and distinct flavor. It typically retains a greenish-yellow skin even when ripe and has a smooth.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 150</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e1")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>

      </section>
      <section className='grid grid-cols-5 mx-6 my-8'>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-neelam-mango_480x480.jpg?v=1685514108"
                alt="Neelam" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Neelam
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Neelam mangoes are a South Indian dessert mango variety, known for their smooth, golden-yellow skin and fiberless, fragrant flesh. They are medium-sized.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 170</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4ed")}>Add To Cart</button>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-rajapuri-mango_480x480.jpg?v=1685515207"
                alt="Rajapuri" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Rajapuri
                <div className="badge badge-secondary">Sold Out</div>
              </h2>
              <p>Rajapuri mangoes are a large-sized variety, often weighing between 350-400 grams, with an elongated, oblique shape, orange flesh, juiciness.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 150</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Himayat-mango_480x480.jpg?v=1685516079"
                alt="Himayat" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Himayat
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Hailing from the picturesque valleys of Jammu and Kashmir, the Himayat mango is as unique as its origin. With its elongated shape.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 120</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e3")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-sinduri-aam_480x480.jpg?v=1685516178"
                alt="Sinduri" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Sinduri
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>From the sunny state of Andhra Pradesh, the Sinduri mango brings a burst of sunshine to your taste buds. Its bright red skin and sweet, aromatic.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 110</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e4")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-himsagar_480x480.jpg?v=1685516503"
                alt="Himsagar" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Himsagar
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>When it comes to mangoes, West Bengal holds a special place, and the Himsagar mango is its pride. This round, greenish-yellow fruit boasts a fiberless.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 130</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e2")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>

      </section>
      <section className='grid grid-cols-5 mx-6 my-8'>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Mulgoba_480x480.jpg?v=1685517881"
                alt="Mulgoba" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Mulgoba
                <div className="badge badge-secondary">Sold Out</div>
              </h2>
              <p>from Tamil Nadu, the Mulgoba mango is a true treasure trove of flavors. With its rich, sweet, and tangy flesh, this variety is highly regarded for its taste and aroma.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 150</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("")}>Add To Cart</button>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Amrapali-aam_480x480.jpg?v=1685521322"
                alt="Amrapali" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Amrapali
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Named after a legendary royal courtesan, the Amrapali mango is a tempting beauty from Bihar. Its attractive, pinkish-red skin and aromatic.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 175</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4ec")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Gulab-Khas_480x480.jpg?v=1685523490"
                alt="Gulab Khas" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Gulab Khas
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Originating from Uttar Pradesh, the Gulab Khas mango is a fragrant delight that will captivate your senses. Its pale yellow skin and intoxicating aroma.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 135</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e5")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-lalbag-aam_480x480.jpg?v=1685523624"
                alt="Lalbagh" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Lalbagh
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>The Lalbagh mango, native to Karnataka, is a delightful combination of sweetness and tanginess. Its bright red skin and juicy, fiberless flesh.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 125</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e6")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Suvarnarekha_480x480.jpg?v=1685517774"
                alt="Suvarna" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Suvarna
                <div className="badge badge-secondary">Sold Out</div>
              </h2>
              <p>As the name suggests, the Suvarnarekha mango is truly a golden streak of sunshine from Kerala. Its smooth, yellow skin and sweet, juicy flesh .</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-green-400">₹ 150</div>
                <button className="btn btn-outline btn-warning" onClick={() => handleAddToCart("")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>

      </section>
      <div className='mt-16'>
        <h1 className='flex justify-center text-5xl text-green-400'>Lychees</h1>
      </div>
      <section className='grid grid-cols-5 mx-6 my-8'>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="data:image/jpeg;base64,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"
                alt="Muzaffarpur Shahi" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Muzaffarpur Shahi
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>The Shahi litchi, grown primarily in Muzaffarpur, Bihar, is a popular and prized variety of litchi known for its unique aroma, juicy pulp, and smaller-than-average seeds. It's recognized as a Geographical Indication (GI) and is famous for its "rose-scented" fragrance. </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-yellow-400">₹ 195</div>
                <button className="btn btn-outline btn-success" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4ea")}>Add To Cart</button>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="data:image/jpeg;base64,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"
                alt="Swarna Roopa" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Swarna Roopa
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Swarna Roopa is a lychee cultivar developed in India by CHES, Ranchi, known for its high T.S.S. (total soluble solids) and fruit cracking resistance. It is a heavy bearing variety, producing an average of 90-100 kg of fruit per tree. Swarna Roopa is also known for its large fruits and is considered the first lychee variety developed in India . </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-yellow-400">₹ 200</div>
                <button className="btn btn-outline btn-success" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e8")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1705335834319-92a152363ea1?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwyfHxjaGluYSUyMGxpdGNoaXxlbnwwfHx8fDE3MTY4OTEzODN8MA&ixlib=rb-4.0.3&fm=jpg&w=4608&h=3456&fit=max"
                alt="kasba " />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                kasba
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Kasba litchi is a well-known, commercially cultivated litchi variety, particularly in West Bengal, India. It is known for its large size, obliquely heart-shaped fruits with a carmine red tubercles on a green background. This variety is notable for its juicy, greyish-white pulp and a high total soluble solids (T.S.S.) content of 17%. </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-yellow-400">₹ 180</div>
                <button className="btn btn-outline btn-success" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e7")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://anotherglobaleater.wordpress.com/wp-content/uploads/2020/06/img_20200608_135748.jpg?w=800"
                alt="Purbi" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Purbi
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Purbi is commonly known in different regions of India, such as West Bengal, Jharkhand, North Bihar, and Uttar Pradesh. It's a medium-late season variety, known for its medium-large, oblong-conical fruits with a red tubercle pattern.  </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-yellow-400">₹ 190</div>
                <button className="btn btn-outline btn-success" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4e9")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="card bg-base-100 w-64 shadow-sm">
            <figure>
              <img
                src="https://m.media-amazon.com/images/I/51KYMODtZZL._AC_UF1000,1000_QL80_.jpg"
                alt="Rose Scented" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Rose Scented
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>They encompass the full range of fragrances found in classic old roses or tea roses and can be grouped into five basic types, including myrrh, fruity, musk.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline text-2xl mt-1.5 text-yellow-400">₹ 185</div>
                <button className="btn btn-outline btn-success" onClick={() => handleAddToCart("684c1a57ae498c0ccb1df4eb")}>Add To Cart</button>

              </div>
            </div>
          </div>

        </div>

      </section>
    </main>

  )
}

export default Buyfruits
