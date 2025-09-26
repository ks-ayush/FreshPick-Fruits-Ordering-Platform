"use client";
import React from 'react'
import Image from 'next/image'
import { AddToCart } from '../components/AddToCart.js';
import { toast } from 'react-toastify';


const Buyfruits = () => {
  const handleAddToCart = async (fruitId) => {
    if (fruitId === "") {
      toast.error('Item is out of stock');
      return;
    }
    try {
      const result = await AddToCart(fruitId);

      toast.success(result.message || 'Added to cart');
    } catch (err) {
      toast.error(err.message || 'Failed to add to cart');
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-alphonso_480x480.jpg?v=1685511367"
                alt="Alphonso"
                width={480}
                height={480}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Alphonso
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Alphonso mangoes, known as the King of Mangoes, are a prized variety from India. They are renowned for their rich, creamy texture, and unique sweet and musky flavor</p>
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-kesar-mango_480x480.jpg?v=1685511462"
                alt="Kesar"
                width={480}
                height={480}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Kesar
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Kesar mango, also known as Gir Kesar, is a popular mango variety originating from the Junagadh district of Gujarat, India. It is prized for its distinct saffron colored flesh. </p>
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-dasheri-mango_480x480.jpg?v=1685511608"
                alt="Dasheri"
                width={480}
                height={480}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Dasheri
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Dasheri mango, originating in India, is a sweet and fragrant cultivar highly prized for its unique flavor and aroma. It is known for its medium to large size, smooth yellow skin</p>
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Banganapalli_480x480.jpg?v=1685511835"
                alt="Banganapalli"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-langra_480x480.jpg?v=1685511978"
                alt="Langra"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-neelam-mango_480x480.jpg?v=1685514108"
                alt="Neelam"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-rajapuri-mango_480x480.jpg?v=1685515207"
                alt="Rajapuri"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Himayat-mango_480x480.jpg?v=1685516079"
                alt="Himayat"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-sinduri-aam_480x480.jpg?v=1685516178"
                alt="Sinduri"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-himsagar_480x480.jpg?v=1685516503"
                alt="Himsagar"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Mulgoba_480x480.jpg?v=1685517881"
                alt="Mulgoba"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Amrapali-aam_480x480.jpg?v=1685521322"
                alt="Amrapali"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Gulab-Khas_480x480.jpg?v=1685523490"
                alt="Gulab Khas"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-lalbag-aam_480x480.jpg?v=1685523624"
                alt="Lalbagh"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nl-mango-Suvarnarekha_480x480.jpg?v=1685517774"
                alt="Suvarna"
                width={480}
                height={480}
                className="object-cover"
              />
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
              <Image
                src="/api/placeholder/480/480"
                alt="Muzaffarpur Shahi"
                width={480}
                height={480}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Muzaffarpur Shahi
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>The Shahi litchi, grown primarily in Muzaffarpur, Bihar, is a popular and prized variety of litchi known for its unique aroma, juicy pulp, and smaller-than-average seeds. It is recognized as a Geographical Indication and is famous for its rose-scented fragrance. </p>
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
              <Image
                src="/api/placeholder/480/480"
                alt="Swarna Roopa"
                width={480}
                height={480}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Swarna Roopa
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Swarna Roopa is a lychee cultivar developed in India by CHES, Ranchi, known for its high T.S.S. total soluble solids and fruit cracking resistance. It is a heavy bearing variety, producing an average of 90-100 kg of fruit per tree. Swarna Roopa is also known for its large fruits and is considered the first lychee variety developed in India . </p>
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
              <Image
                src="https://images.unsplash.com/photo-1705335834319-92a152363ea1?ixid=M3wxMzcxOTN8MHwxfHNlYXJjaHwyfHxjaGluYSUyMGxpdGNoaXxlbnwwfHx8fDE3MTY4OTEzODN8MA&ixlib=rb-4.0.3&fm=jpg&w=4608&h=3456&fit=max"
                alt="kasba"
                width={480}
                height={480}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                kasba
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Kasba litchi is a well-known, commercially cultivated litchi variety, particularly in West Bengal, India. It is known for its large size, obliquely heart shaped fruits with a carmine red tubercles on a green background. This variety is notable for its juicy, greyish-white pulp and a high total soluble solids content of 17 percent. </p>
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
              <Image
                src="https://anotherglobaleater.wordpress.com/wp-content/uploads/2020/06/img_20200608_135748.jpg?w=800"
                alt="Purbi"
                width={480}
                height={480}
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Purbi
                <div className="badge badge-secondary">InStock</div>
              </h2>
              <p>Purbi is commonly known in different regions of India, such as West Bengal, Jharkhand, North Bihar, and Uttar Pradesh. It is a medium-late season variety, known for its medium-large, oblong-conical fruits with a red tubercle pattern.  </p>
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
              <Image
                src="https://m.media-amazon.com/images/I/51KYMODtZZL._AC_UF1000,1000_QL80_.jpg"
                alt="Rose Scented"
                width={480}
                height={480}
                className="object-cover"
              />
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