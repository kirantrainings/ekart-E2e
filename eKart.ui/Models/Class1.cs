using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eKart.ui.Models
{
    public class Gadgets
    {
        public string GadgetId { get; set; }
        public string Model { get; set; }
        public string Price { get; set; }

        public List<Gadgets> GetAllGadgets()
        {
            var gadgets = new List<Gadgets>();
            gadgets.Add(new Gadgets() { GadgetId = "1", Model = "SamsungE7", Price = "20000" });
            gadgets.Add(new Gadgets() { GadgetId = "2", Model = "iPhone 65", Price = "25000" });
            gadgets.Add(new Gadgets() { GadgetId = "3", Model = "Note5", Price = "40000" });
            gadgets.Add(new Gadgets() { GadgetId = "4", Model = "iPadMini", Price = "60000" });
            gadgets.Add(new Gadgets() { GadgetId = "5", Model = "SamsungEdge", Price = "500000" });
            return gadgets;
        }
    }
}