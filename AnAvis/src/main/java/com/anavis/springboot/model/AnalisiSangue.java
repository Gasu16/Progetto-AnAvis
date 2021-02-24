package com.anavis.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "analisi")
public class AnalisiSangue {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String emoglobina;
	private String globuli_bianchi;
	private String globuli_rossi;
	private String piastrine;

	@Column(name = "codiceFiscale")
	private String codiceFiscale;
	
	
	// Costruttori
	
	public AnalisiSangue() {
		
	}
	
	public AnalisiSangue(String codiceFiscale, String emoglobina, String globuli_bianchi, String globuli_rossi,
			String piastrine) {
		super();
		this.codiceFiscale = codiceFiscale;
		this.emoglobina = emoglobina;
		this.globuli_bianchi = globuli_bianchi;
		this.globuli_rossi = globuli_rossi;
		this.piastrine = piastrine;
	}

	
	// Getters e setters
	
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCodiceFiscale() {
		return codiceFiscale;
	}

	public void setCodiceFiscale(String codiceFiscale) {
		this.codiceFiscale = codiceFiscale;
	}

	public String getEmoglobina() {
		return emoglobina;
	}

	public void setEmoglobina(String emoglobina) {
		this.emoglobina = emoglobina;
	}

	public String getGlobuli_bianchi() {
		return globuli_bianchi;
	}

	public void setGlobuli_bianchi(String globuli_bianchi) {
		this.globuli_bianchi = globuli_bianchi;
	}

	public String getGlobuli_rossi() {
		return globuli_rossi;
	}

	public void setGlobuli_rossi(String globuli_rossi) {
		this.globuli_rossi = globuli_rossi;
	}

	public String getPiastrine() {
		return piastrine;
	}

	public void setPiastrine(String piastrine) {
		this.piastrine = piastrine;
	}
	
	

}
