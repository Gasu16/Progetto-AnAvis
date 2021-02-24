package com.anavis.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "emergenze")
public class Emergenza {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String citta;
	private String gruppoSanguigno;
	
	
	@Column(name = "codiceEmergenza")
	private String codiceEmergenza;

	// Costruttori
	
	
	public Emergenza() {
		
	}
	
	public Emergenza(String codiceEmergenza, String citta, String gruppoSanguigno) {
		super();
		this.codiceEmergenza = codiceEmergenza;
		this.citta = citta;
		this.gruppoSanguigno = gruppoSanguigno;
	}

	// Getters e setters
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCodiceEmergenza() {
		return codiceEmergenza;
	}

	public void setCodiceEmergenza(String codiceEmergenza) {
		this.codiceEmergenza = codiceEmergenza;
	}
	
	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}
	
	public String getGruppoSanguigno() {
		return gruppoSanguigno;
	}

	public void setGruppoSanguigno(String gruppoSanguigno) {
		this.gruppoSanguigno = gruppoSanguigno;
	}
	


}