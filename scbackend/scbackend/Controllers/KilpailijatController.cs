using Azure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using scbackend.Models;

namespace scbackend.Controllers
{
    [Route("api/kilpailijat")]
    [ApiController]
    public class KilpailijatController : Controller
    {
        // Hakee kaikki kilpailijat tietokannasta
        [HttpGet(Name = "haekilpailijat")]
        public List<Kilpailijat> Haekilpailijat()
        {
            SportchambaraContext scContext = new();

            var kilpailijat = (from k in scContext.Kilpailijats
                               select k).ToList();


            return kilpailijat;
        }
        /*
        // GET: KilpailijatController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: KilpailijatController/Create
        public ActionResult Create()
        {
            return View();
        }*/

        // POST: KilpailijatController/Create
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public string LisaaKilpailija(Kilpailijat uusi)
        {
            try
            {
                SportchambaraContext scContext = new();

                scContext.Add(new Kilpailijat {
                    Etunimi = uusi.Etunimi,
                    Sukunimi = uusi.Sukunimi,
                    Seura = uusi.Seura
                });
                scContext.SaveChanges();
                return "onnistui";
            }
            catch
            {
                return "jotain meni pieleen";
            }
        }

        /*
        GET: KilpailijatController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        */

        //PUT: KilpailijatController/Edit/5
        [HttpPut ("{id}")]
        //[ValidateAntiForgeryToken]
        public string Edit(int id, Kilpailijat muokattavaKilpailija)
        {
            try
            {
                SportchambaraContext scContext = new();
                var kilpailija = scContext.Kilpailijats.First(a => a.Kilpailijaid == id);
                kilpailija.Etunimi = muokattavaKilpailija.Etunimi;
                kilpailija.Sukunimi = muokattavaKilpailija.Sukunimi;
                kilpailija.Seura = muokattavaKilpailija.Seura;
                scContext.Update(kilpailija);
                scContext.SaveChanges ();



                return "onnistui";
            }
            catch
            {
                return "epäonnistui";
            }
        }

        // GET: KilpailijatController/Delete/5

        /*[Route("api/kilpailijat/:id")]
        public ActionResult Delete(int id)
        {
            return View();
        }*/

        // Delete: KilpailijatController/:id
        [HttpDelete("{id}")]
        //[ValidateAntiForgeryToken]

        public string Delete(int id)
        {
            try
            {

                SportchambaraContext scContext = new();
                Kilpailijat poistettavaKilpailija = new Kilpailijat { Kilpailijaid = id};
                scContext.Remove(poistettavaKilpailija);
                scContext.SaveChanges();
                return "onnistui " + id;
            }
            catch
            {
                
                return "epäonnistui";
            }
        }
    }
}
