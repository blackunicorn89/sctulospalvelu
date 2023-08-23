using System;
using System.Collections.Generic;

namespace scbackend.Models;

public partial class Kilpailijat
{
    public int Kilpailijaid { get; set; }

    public string Etunimi { get; set; } = null!;

    public string Sukunimi { get; set; } = null!;

    public string? Seura { get; set; }
}
