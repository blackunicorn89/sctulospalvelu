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
        }

        // POST: KilpailijatController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: KilpailijatController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: KilpailijatController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: KilpailijatController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: KilpailijatController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }*/
    }
}
