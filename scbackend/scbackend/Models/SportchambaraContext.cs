using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace scbackend.Models;
//Scaffold-DbContext "Server=.\SQLExpress;Database=sportchambara;Trusted_Connection=True;TrustServerCertificate=True" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models

public partial class SportchambaraContext : DbContext
{
    public SportchambaraContext()
    {
    }

    public SportchambaraContext(DbContextOptions<SportchambaraContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Kilpailijat> Kilpailijats { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=sportchambara;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Kilpailijat>(entity =>
        {
            entity.HasKey(e => e.Kilpailijaid).HasName("PK__kilpaili__992E46D5B96574B3");

            entity.ToTable("kilpailijat");

            entity.Property(e => e.Etunimi)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Seura)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.Sukunimi)
                .HasMaxLength(60)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
